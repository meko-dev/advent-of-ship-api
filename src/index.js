import { Hono } from 'hono';
import { cors } from 'hono/cors';
import postgres from 'postgres';
import nodemailer from 'nodemailer';

import AuthHandler from '@meko-base/hono-user-management';

const HONO_PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const CORS_ORIGINS = [process.env.CLIENT_URL];

const sql = postgres(process.env.DATABASE_URL);

const authHandler = new AuthHandler({ Hono, sql, corsOrigins: CORS_ORIGINS });
const app = new Hono();

app.use('/*', cors({ origin: CORS_ORIGINS, credentials: true }));

app.get('/', context => context.text('Hello API!'));
app.get('/initdb', async context => await authHandler.initDb(context));
app.get('/testmail', async context => {
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 2500,
    secure: false
  });

  transporter.sendMail({
    from: '"YourCompany" <no-reply@yourdomain.com>',
    to: "customer@example.com",
    subject: "Test email",
    text: "Hello world"
  });

  return context.json({ success: true });
});

app.use('/user', async (context, next) => await authHandler.verify(context, next));
app.get('/user', async context => {
  const userData = await authHandler.getUserById(context.get('userId'));
  return context.json({ success: true, data: { id: userData.id, email: userData.email, name: userData.name } });
});

app.route('/auth', authHandler.routes);

app.onError(error => { console.log(error); return Response.json({ success: false, errorCode: error.cause || 'unknown' }) });

export default {
  port: HONO_PORT,
  fetch: app.fetch
};
