import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'twitter-api-sdk';

export const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN as string);

export default async function getTweet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Pass auth credentials to the library client
    const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN as string);

    const usersTweets = await twitterClient.tweets.usersIdTweets(
      //The ID of the User to list Tweets of
      process.env.USER_ID,
      {
        //A comma separated list of fields to expand
        expansions: ["author_id"],
        //A comma separated list of Tweet fields to display
        "tweet.fields": [
          "created_at",
          "author_id",
          "conversation_id",
          "public_metrics",
          "context_annotations",
        ],
        //A comma separated list of User fields to display
        "user.fields": [
          "username",
          "profile_image_url"
        ],
        //The maximum number of results
        max_results: 5,
      }
    );

    // console.log(usersTweets)
    res.status(200).json(usersTweets);
  } catch (err) {
    console.log(err);
    console.error(err);
    res.statusCode = 500;
  }
}