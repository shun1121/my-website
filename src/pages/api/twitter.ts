import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'twitter-api-sdk';

export default async function getTweet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN as string);

    const usersTweets = await twitterClient.tweets.usersIdTweets(
      process.env.USER_ID,
      {
        expansions: ["author_id"],
        "tweet.fields": [
          "created_at",
          "author_id",
          "conversation_id",
          // "public_metrics",
          // "context_annotations",
        ],
        "user.fields": [
          "username",
          "profile_image_url"
        ],
        max_results: 5,
      }
    );

    res.status(200).json(usersTweets);
  } catch (err) {
    console.log(err);
    console.error(err);
    res.statusCode = 500;
  }
}