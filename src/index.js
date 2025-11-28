import { Hono } from 'hono';
import { cors } from 'hono/cors';

const HONO_PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const CORS_ORIGINS = [process.env.CLIENT_URL];

const CHALLENGE_START_DATE = new Date('2025-11-30T00:00:00+05:00');

const PHASES = {
  clarity: 'Product Clarity',
  comm: 'Communication',
  marketing: 'Marketing Basics',
  network: 'Networking',
  launch: 'Launch Prep'
};

const DAILY_TASKS = [
  {
    id: 'h1',
    title: PHASES.clarity,
    phase: 'clarity',
    description: 'Write a 2-sentence public update or log for yourself.',
    icon: 'compass'
  },
  {
    id: 'h2',
    title: PHASES.comm,
    phase: 'comm',
    description: 'Create one tiny piece of content (tweet, micro-blog, screenshot, insight, etc.).',
    icon: 'waves'
  },
  {
    id: 'h3',
    title: PHASES.marketing,
    phase: 'marketing',
    description: 'Share one thing you learned today on social media.',
    icon: 'package'
  },
  {
    id: 'h4',
    title: PHASES.network,
    phase: 'network',
    description: 'Engage with 3 people in your niche.',
    icon: 'anchor'
  },
  {
    id: 'h5',
    title: PHASES.launch,
    phase: 'launch',
    description: 'Collect at least one signal of interest (email, DM, reply, signup, beta user, comment).',
    icon: 'ship'
  }
];

const CHALLENGES = [
  {
    day: 1,
    phase: 'clarity',
    title: 'Know Your User',
    description: 'Define exactly who you are building for.',
    detailedTask: 'Create a persona for your ideal customer. Give them a name, job title, and identifying struggles. Write down 3 critical problems they face that your product solves. Be specific, not general.'
  },
  {
    day: 2,
    phase: 'clarity',
    title: 'Define Value',
    description: 'Articulate the primary value prop clearly.',
    detailedTask: 'Draft your Unique Value Proposition (UVP). Use the formula: "I help [Target Audience] achieve [Benefit] by [Unique Mechanism]." Refine it until it feels punchy and true.'
  },
  {
    day: 3,
    phase: 'clarity',
    title: 'The Problem',
    description: 'Understand the pain point deeply.',
    detailedTask: 'Write a "Problem Statement" of 100 words. Describe the user\'s current workflow and why it is broken. If you cannot describe the pain, you cannot sell the aspirin.'
  },
  {
    day: 4,
    phase: 'clarity',
    title: 'Your Story',
    description: 'Why are YOU building this?',
    detailedTask: 'Write the "Origin Story" of this project. Why do you care? Vulnerability builds trust. This will be the seed for your About page or launch post.'
  },
  {
    day: 5,
    phase: 'clarity',
    title: 'Differentiation',
    description: 'How is this different from existing tools?',
    detailedTask: 'List 3 major competitors. For each, write one sentence on why they are good, and one sentence on where they fail. Your product should fill one of those failure gaps.'
  },
  {
    day: 6,
    phase: 'comm',
    title: 'Elevator Pitch',
    description: 'Explain it in 30 seconds or less.',
    detailedTask: 'Record yourself explaining your product in 30 seconds. Listen to it. Is it jargon-heavy? Confusing? Re-record until a 10-year-old would understand it.'
  },
  {
    day: 7,
    phase: 'comm',
    title: 'Public Update',
    description: 'Post your first real build-in-public update.',
    detailedTask: 'Take a screenshot of your code, design, or notebook. Post it to X/LinkedIn with the caption: "Day 7 of shipping [Product Name]. Tackling [Feature]. #buildinpublic".'
  },
  {
    day: 8,
    phase: 'comm',
    title: 'Landing Copy',
    description: 'Draft the headline and subheadline.',
    detailedTask: 'Write 10 variations of your landing page headline. Pick the one that focuses most on the outcome/benefit, not the features.'
  },
  {
    day: 9,
    phase: 'comm',
    title: 'Visual Identity',
    description: 'Pick your colors and font. Move on.',
    detailedTask: 'Do not spend 5 hours on this. Pick a primary color, a font for headings, and a font for body. Save them as a simple brand kit. Commit to it for the launch.'
  },
  {
    day: 10,
    phase: 'comm',
    title: 'The Demo',
    description: 'Script a 60-second video walkthrough.',
    detailedTask: 'You do not need to record yet, just write the script. "Here is the problem. Here is how [Product] fixes it. Here is the result." Keep it tight.'
  },
  {
    day: 11,
    phase: 'marketing',
    title: 'Social Setup',
    description: 'Optimize your bio for conversion.',
    detailedTask: 'Update your Twitter/LinkedIn bio. It should clearly state what you are building and include a link (even if it is just a waitlist form).'
  },
  {
    day: 12,
    phase: 'marketing',
    title: 'Content Plan',
    description: 'Plan 5 posts for the next 5 days.',
    detailedTask: 'Brainstorm 5 topics: A mistake you made, a tool you love, a problem you solved, a question for your audience, a sneak peek. Schedule them if possible.'
  },
  {
    day: 13,
    phase: 'marketing',
    title: 'Lead Magnet',
    description: 'What can you give away for free?',
    detailedTask: 'Think of a simple PDF, checklist, or curated list related to your niche. You do not have to make it today, just decide what it is. This builds your email list.'
  },
  {
    day: 14,
    phase: 'marketing',
    title: 'SEO Basics',
    description: 'Identify 5 keywords.',
    detailedTask: 'What are people typing into Google to find a solution like yours? List 5 long-tail keywords (e.g., "how to automate invoice processing").'
  },
  {
    day: 15,
    phase: 'marketing',
    title: 'First Outreach',
    description: 'DM 5 potential users.',
    detailedTask: 'Find 5 people who fit your persona. Send a genuine DM: "Hey, building something for [Problem]. Saw you talk about this. Mind if I pick your brain for 5 mins?"'
  },
  {
    day: 16,
    phase: 'network',
    title: 'Find Peers',
    description: 'Identify 3 fellow builders.',
    detailedTask: 'Shipping is lonely. Find 3 other people participating in challenges or building in public. Follow them and comment on their latest update.'
  },
  {
    day: 17,
    phase: 'network',
    title: 'Give Feedback',
    description: 'Beta test someone else\'s product.',
    detailedTask: 'Good karma pays dividends. Offer detailed, constructive feedback on someone else\'s project. They will likely return the favor.'
  },
  {
    day: 18,
    phase: 'network',
    title: 'The "Ask"',
    description: 'Draft a message to mentors/influencers.',
    detailedTask: 'Draft a message asking for specific advice (not "can I pick your brain"). Keep it short. "I am stuck on X, I tried Y. What would you do?"'
  },
  {
    day: 19,
    phase: 'network',
    title: 'Community',
    description: 'Post in a relevant subreddit/community.',
    detailedTask: 'Find a subreddit or Discord related to your niche. Introduce yourself and your mission. Do not sell; just share your journey.'
  },
  {
    day: 20,
    phase: 'network',
    title: 'Feedback Loop',
    description: 'Set up a system for user feedback.',
    detailedTask: 'Create a simple mechanism (Google Form, Canny, email alias) to collect feedback easily once you launch. Remove friction.'
  },
  {
    day: 21,
    phase: 'launch',
    title: 'Launch Checklist',
    description: 'List everything that must be done.',
    detailedTask: 'Write a master checklist. Domain connected? Analytics installed? Payment gateway works? Support email active? Leave nothing to chance.'
  },
  {
    day: 22,
    phase: 'launch',
    title: 'Assets Prep',
    description: 'Create launch day images/videos.',
    detailedTask: 'Create the Open Graph image (social preview), a clear product screenshot, and a 10-second teaser clip.'
  },
  {
    day: 23,
    phase: 'launch',
    title: 'Distribution',
    description: 'List 10 places to post on launch day.',
    detailedTask: 'Product Hunt, Hacker News, Indie Hackers, Twitter, LinkedIn, relevant Discords, Reddit, Slack groups, directories, newsletter.'
  },
  {
    day: 24,
    phase: 'launch',
    title: 'The Offer',
    description: 'Define pricing and launch promo.',
    detailedTask: 'What is the price? Is there a launch discount (e.g., "First 50 users get 50% off")? Create the coupon codes now.'
  },
  {
    day: 25,
    phase: 'launch',
    title: 'Launch Day',
    description: 'Draft the announcement tweet.',
    detailedTask: 'Write the thread. Hook -> Problem -> Solution -> Proof -> Call to Action. Save it. You are ready to ship.'
  }
];

const app = new Hono();

app.use('/*', cors({ origin: CORS_ORIGINS, credentials: true }));

app.get('/', context => context.text('Hello API!'));

app.get('/challenge', context => {
  const now = new Date('2025-12-01T00:02:17+05:00'); // new Date('2025-11-30T00:02:17+05:00'); // new Date();
  const dayOfChallenge = Math.max(0, Math.floor((now - CHALLENGE_START_DATE.getTime()) / (1000 * 60 * 60 * 24)));

  const secondsUntilChallengeStart = Math.floor((CHALLENGE_START_DATE.getTime() - now) / 1000);
  const secondsUntilNextChallenge = Math.floor((CHALLENGE_START_DATE.getTime() + (dayOfChallenge > 0 ? (1000 * 60 * 60 * 24 * (dayOfChallenge + 1)) : 0) - now) / 1000);
  const secondsUntilNextDailyTask = Math.floor((CHALLENGE_START_DATE.getTime() + (dayOfChallenge > 0 ? (1000 * 60 * 60 * 24 * Math.ceil(dayOfChallenge + 5)) : 0) - now) / 1000);

  return context.json({
    success: true,
    data: {
      dailyTasks: DAILY_TASKS.slice(0, Math.ceil(dayOfChallenge / 5)),
      challenges: CHALLENGES.slice(0, dayOfChallenge),
      dayOfChallenge,
      secondsUntilChallengeStart,
      secondsUntilNextChallenge,
      secondsUntilNextDailyTask
    }
  });
});

app.onError(error => { console.log(error); return Response.json({ success: false, errorCode: error.cause || 'unknown' }) });

export default {
  port: HONO_PORT,
  fetch: app.fetch
};
