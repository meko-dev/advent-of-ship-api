import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { CHALLENGE_START_DATE, DAILY_TASKS, CHALLENGES } from './data.js';

const HONO_PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const CORS_ORIGINS = [process.env.CLIENT_URL];

const app = new Hono();

app.use('/*', cors({ origin: CORS_ORIGINS, credentials: true }));

app.get('/', context => context.text('Hello API!'));

app.get('/challenge', context => {
  const now = new Date(); // new Date('2025-11-30T00:02:17+05:00'); // new Date();
  const dayOfChallenge = Math.max(0, Math.ceil((now - CHALLENGE_START_DATE.getTime()) / (1000 * 60 * 60 * 24)));

  const secondsUntilChallengeStart = Math.floor((CHALLENGE_START_DATE.getTime() - now) / 1000);
  // Gets the seconds until the next challenge starts
  const secondsUntilNextChallenge = Math.floor((CHALLENGE_START_DATE.getTime() + (dayOfChallenge > 0 ? (1000 * 60 * 60 * 24 * dayOfChallenge) : 0) - now) / 1000);

  // Gets the seconds until the next daily task starts. Daily tasks are unlocked every 5 days.
  const secondsUntilNextDailyTask = Math.floor((CHALLENGE_START_DATE.getTime() + (dayOfChallenge > 0 ? (1000 * 60 * 60 * 24 * (Math.ceil(dayOfChallenge / 5) * 5)) : 0) - now) / 1000);

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
