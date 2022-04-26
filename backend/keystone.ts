import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';

const databaseURL =
  process.env.DATABASE_URL || 'http://localhost/keystone-sick-fits-tutorial';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30, // how long users stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add data seeding here
  },
  lists: createSchema({
    // schema items go here
    User,
  }),
  ui: {
    // TODO: change for roles in the future
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
