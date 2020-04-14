import environment from "../environment";
import { ReactionAddedOutput } from './lib/reaction_output';

const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: environment.SLACK_BOT_TOKEN,
  signingSecret: environment.SLACK_SIGNING_SECRET
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 42069);

  console.log('⚡️ Bolt app is running!');



  app.event('reaction_added', async (e: ReactionAddedOutput) => {

      console.log(e.event.item.channel)
  });
})();