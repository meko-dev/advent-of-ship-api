export const CHALLENGE_START_DATE = new Date('2025-11-30T05:00:00'); // new Date('2025-10-22T05:00:00'); // new Date('2025-11-30T05:00:00');

export const DAILY_TASKS = [
  {
    category: 'clarity',
    title: 'The North Star',
    intro: 'Re-read your problem statement.',
    prologue: 'Complexity creeps in when we forget why we started. It is easy to get lost in technical details and drift away from the user\'s actual pain. Re-centering your focus every morning ensures you are not just building software, but solving the specific problem you set out to fix.',
    task: 'Read the "Problem Statement" you defined on Day 1. Look at the code you plan to write today and simply ask: "Does this specific work directly help solve that problem?"'
  },
  {
    category: 'comm',
    title: 'The Rubber Duck',
    intro: 'Explain your work out loud.',
    prologue: 'It is easy to get lost in the weeds of code and lose sight of the "why." Vocalizing your progress forces you to simplify your thoughts. If you cannot explain what you are doing simply, you usually do not understand the problem well enough yet.',
    task: 'Spend two minutes explaining what you are building today out loud to an empty room (or a rubber duck). If you stumble over words, refine your logic.'
  },
  {
    category: 'marketing',
    title: 'The Daily Log',
    intro: 'Document the journey publicly.',
    prologue: 'Consistency beats virality. By posting even when you have nothing "big" to announce, you show potential users that you are active and reliable. It creates a paper trail of effort that builds trust with future buyers.',
    task: 'Post one sentence or one screenshot of what you are working on right now to your social account. Optionally, tag it with #AdventOfShip.'
  },
  {
    category: 'network',
    title: 'Give First',
    intro: 'Support one other builder.',
    prologue: 'Networking makes you feel less alone in the solo-dev journey. The best way to get support is to give it first. Building a small bank of good karma now ensures that people will care when you eventually launch.',
    task: 'Try to find one person posting about their own project. Reply to them with a genuine compliment or a specific question about their work. Do not talk about yourself.'
  },
  {
    category: 'launch',
    title: 'Clean The Deck',
    intro: 'End the day with a commit.',
    prologue: 'Leaving work in a broken state makes it harder to start the next day. A clean stopping point reduces friction and anxiety when you open your laptop tomorrow morning. It acts as a mental "save point" for your project.',
    task: 'Before you close your laptop, fix one small bug, delete one unused file, or format one messy file. Commit your code so you start fresh tomorrow.'
  }
];

export const CHALLENGES = [
  {
    day: 1,
    category: 'clarity',
    title: 'Define the Pain',
    intro: 'Identify the exact problem you solve.',
    prologue: 'Most products fail because they solve a problem nobody actually cares about or notices. Writing this down creates a "North Star" for every decision you make later. It prevents feature creep by forcing you to ask if a feature solves this specific pain.',
    task: 'Write down the single, specific problem your MVP solves for the user. Use the format: "My user struggles with [X] because [Y] is currently too difficult/expensive/slow."'
  },
  {
    day: 2,
    category: 'clarity',
    title: 'Name the User',
    intro: 'Describe exactly who has the problem.',
    prologue: 'You cannot build for "everyone" because you cannot market to everyone with a zero-dollar budget. A specific niche allows you to speak their language directly. When the user reads your copy, they should feel like you read their mind.',
    task: 'Define your specific niche user in one sentence. Be hyper-specific, such as "Junior React developers looking for remote work" rather than just "developers."'
  },
  {
    day: 3,
    category: 'clarity',
    title: 'Kill Your Darlings',
    intro: 'Remove features to find the core.',
    prologue: 'Your scope is likely too big for a 25-day launch window. Shipping late is the enemy of shipping at all. You must identify the absolute minimum required to solve the Day 1 problem.',
    task: 'List every feature you want to build. Now delete or "nice-to-have" everything except the one feature that directly solves the problem defined on Day 1.'
  },
  {
    day: 4,
    category: 'clarity',
    title: 'Analyze the Enemy',
    intro: 'Find one alternative your user uses.',
    prologue: 'Your users are already solving this problem somehow, even if they use a spreadsheet or pen and paper. Understanding the alternative helps you understand what you are actually competing against. It highlights where the current solution causes friction.',
    task: 'Find one direct competitor or manual workaround your user currently uses. Write down one specific thing your MVP will do faster or better than that existing solution.'
  },
  {
    day: 5,
    category: 'clarity',
    title: 'The Value Promise',
    intro: 'Summarize the outcome, not the tool.',
    prologue: 'Users do not buy software. They buy the result that the software gives them. Shifting your mindset from "tool" to "outcome" is critical before you start talking to anyone about it.',
    task: 'Complete this sentence: "After using my product, the user will be able to [Outcome] without [Previous Pain Point]." This is your core value proposition.'
  },
  {
    day: 6,
    category: 'comm',
    title: 'The One Liner',
    intro: 'Draft your elevator pitch.',
    prologue: 'If you cannot explain your product in ten seconds, people will tune out. A strong one-liner is essential for social media bios, introduction emails, and quick conversations. It forces you to be punchy and confident.',
    task: 'Draft a one-sentence pitch that includes your target user, the problem, and the solution. Keep it under 140 characters.'
  },
  {
    day: 7,
    category: 'comm',
    title: 'Benefit over Feature',
    intro: 'Translate code into human value.',
    prologue: 'Developers love listing technical specs, but customers only care about how their life gets better. Learning to translate technical features into human benefits is a communication superpower. It makes your writing persuasive rather than descriptive.',
    task: 'Take your core feature from Day 3. Write down the "So what?" factor. For example, instead of "fast database," write "never wait for data to load."'
  },
  {
    day: 8,
    category: 'comm',
    title: 'The Origin Story',
    intro: 'Explain why you are building this.',
    prologue: 'People buy from people. Sharing your personal motivation creates a connection that nameless corporations cannot match. It builds trust and shows passion, which is attractive to early adopters.',
    task: 'Write three sentences explaining why this problem annoys you personally. This will serve as the intro for your launch posts or "About" page.'
  },
  {
    day: 9,
    category: 'comm',
    title: 'Visual Tone Check',
    intro: 'Decide the vibe of your brand.',
    prologue: 'You do not need a full design system yet, but you do need consistency. A consistent visual tone helps you look professional even if you are just a solo developer. It reduces decision fatigue during development.',
    task: 'Pick one primary color and one font family for your MVP. Commit to using these two choices for all marketing assets and UI elements to ensure consistency.'
  },
  {
    day: 10,
    category: 'comm',
    title: 'The Call-To-Action',
    intro: 'Define exactly what you want.',
    prologue: 'Passive communication yields passive results. You must tell the user exactly what action to take next. Whether it is "Sign Up" or "Pre-order," being explicit removes confusion and increases conversion rates.',
    task: 'Write the exact text for your main button. Ensure it uses an active verb, like "Start Building" or "Get Access," rather than a passive label like "Submit."'
  },
  {
    day: 11,
    category: 'marketing',
    title: 'Profile Cleanup',
    intro: 'Optimize your bio for traffic.',
    prologue: 'When you launch, people will click your profile to see if you are legitimate. A confusing or empty bio is a leaked opportunity. Your social profile is often your first landing page.',
    task: 'Update the bio on your primary social platform (X/Twitter, LinkedIn, generic dev forums). Include your one-liner from Day 6 and a link to your waiting list or personal site.'
  },
  {
    day: 12,
    category: 'marketing',
    title: 'Write the Hero',
    intro: 'Draft the headline for your site.',
    prologue: 'The "Hero" section is the first thing visitors see on your website. If the headline fails to hook them, they will not scroll down. This is the most valuable piece of real estate on your internet presence.',
    task: 'Write your H1 headline and H2 subheadline. The H1 grabs attention with a benefit, and the H2 explains how you deliver that benefit.'
  },
  {
    day: 13,
    category: 'marketing',
    title: 'Build in Public',
    intro: 'Share a work-in-progress update.',
    prologue: 'Marketing is not just the final launch. It is the journey. Sharing ugly, unfinished work builds authenticity and gathers feedback before the high-stakes release. It proves you are actually working on something.',
    task: 'Take a screenshot of your code editor, a rough sketch, or a half-finished designs. Post it to your social channel with the caption: "Building [Product Name]. Day 13."'
  },
  {
    day: 14,
    category: 'marketing',
    title: 'Keyword Quick Look',
    intro: 'Find words users search for.',
    prologue: 'You do not need a full SEO strategy yet, but you should know the basic terms users type into Google. Using the right vocabulary in your copy helps users realize they are in the right place.',
    task: 'Google your problem domain. Look at the "People also ask" section or the bolded words in search results. Note down 3 common terms or phrases people use.'
  },
  {
    day: 15,
    category: 'marketing',
    title: 'The Teaser',
    intro: 'Create anticipation for the launch.',
    prologue: 'Sudden launches often fall flat because nobody knew they were coming. Building anticipation creates a small psychological commitment in your audience. It lets people know they should pay attention soon.',
    task: 'Draft a post aimed for one week before launch. It should say something like: "Finally solving [Problem]. Ships in 10 days. Stay tuned."'
  },
  {
    day: 16,
    category: 'network',
    title: 'The Dream Ten',
    intro: 'List ten potential early users.',
    prologue: 'Sales is just networking with a goal. Thinking of specific people rather than a vague "audience" makes outreach less scary. These are the people you will manually recruit to be your first success stories.',
    task: 'List the names or handles of 10 specific people who you think would genuinely benefit from your MVP. Do not contact them yet. Just find them.'
  },
  {
    day: 17,
    category: 'network',
    title: 'Engage First',
    intro: 'Comment on potential user content.',
    prologue: 'Cold DMs are often ignored. Warm interactions are welcomed. By adding value to someone else\'s conversation first, you become a familiar face rather than a stranger asking for favors.',
    task: 'Go to the profiles of 3 people from your Day 16 list. Leave a thoughtful, non-sales comment on their most recent post. Do not mention your product.'
  },
  {
    day: 18,
    category: 'network',
    title: 'Find the Hubs',
    intro: 'Locate where your users hang out.',
    prologue: 'Fishermen go where the fish are. You need to know which Subreddits, Discord servers, or hashtags your users frequent. launching in an empty room is the same as not launching at all.',
    task: 'Find and join one specific online community (subreddit, forum, or group) relevant to your niche. Read the top 3 posts to understand the culture.'
  },
  {
    day: 19,
    category: 'network',
    title: 'Draft the DM',
    intro: 'Write a polite outreach script.',
    prologue: 'When you eventually reach out, you want to be respectful of time. A bad DM is long and self-centered. A good DM is short, personalized, and asks for feedback rather than money.',
    task: 'Write a strict 3-sentence template for direct messages. 1. Context (I saw you do X). 2. The Product (I built a tool to help with X). 3. The Ask (Can I send you a link for feedback?).'
  },
  {
    day: 20,
    category: 'network',
    title: 'Peer Support',
    intro: 'Connect with another builder.',
    prologue: 'Solo development gets lonely. Having a peer who is also shipping keeps you accountable. They can also help amplify your launch post when the day comes.',
    task: 'Find one other person currently doing the #AdventOfShip challenge or building in public. Send them a message of encouragement saying "Good luck with the ship!"'
  },
  {
    day: 21,
    category: 'launch',
    title: 'Tech Sanity Check',
    intro: 'Ensure the happy path works.',
    prologue: 'You have looked at the code so much you might miss glaring bugs. A final sanity check ensures the core functionality actually executes. This prevents the embarrassment of a broken link on launch day.',
    task: 'Walk through your sign-up flow as if you were a new user. Create a fresh account. If you hit a critical error, fix it. If not, you are ready.'
  },
  {
    day: 22,
    category: 'launch',
    title: 'Asset Assembly',
    intro: 'Gather your launch images.',
    prologue: 'Social media algorithms favor posts with images or video. Scrambling to make a thumbnail 5 minutes before launch creates unnecessary stress. Preparation here ensures your launch looks polished.',
    task: 'Create one 16:9 image (1920x1080) that showcases your product. Save it to your desktop as "Launch_Image_Final.png".'
  },
  {
    day: 23,
    category: 'launch',
    title: 'Platform Checklist',
    intro: 'Prepare the submission text.',
    prologue: 'Whether you are launching on Product Hunt or just Twitter, formatting takes time. Drafting the text beforehand lets you copy-paste on launch day, so you can focus on replying to comments.',
    task: 'Open a notepad. Write your Title, Tagline, and the First Comment you will post on your own thread to kickstart the conversation.'
  },
  {
    day: 24,
    category: 'launch',
    title: 'The Launch Tweet',
    intro: 'Draft the official announcement.',
    prologue: 'This is the big moment. Your launch post needs to capture attention, explain the value, and drive the click. Writing it calmly the day before is better than writing it frantically the day of.',
    task: 'Draft your launch thread. Hook: The Problem. Body: The Solution + Image. Close: The Link. Save it as a draft.'
  },
  {
    day: 25,
    category: 'launch',
    title: 'Push the Button',
    intro: 'Deploy and tell the world.',
    prologue: 'The fear of shipping never truly goes away, you just act in spite of it. Today is about execution. Perfect is the enemy of done. You made it this far, so let the world see what you built.',
    task: 'Deploy your code to production. Post your drafted announcement text. Write on a social media platform with the caption: "I shipped it! [Link to your product] #AdventOfShip"'
  }
];
