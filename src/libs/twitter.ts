import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'twitter-api-sdk';

export const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN as string);

// export default async function getTweet(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     // Pass auth credentials to the library client
//     const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN as string);

//     const recentSearch = await twitterClient.tweets.tweetsRecentSearch({
//       //One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length
//       query: '(from:Shunsuk87072477)',

//       //A comma separated list of fields to expand.
//       expansions: ['author_id'],

//       //A comma separated list of User fields to display.
//       'tweet.fields': ['created_at'],

//       //The maximum number of results
//       max_results: 10,
//     });

//     console.log(recentSearch)
//     res.status(200).json(recentSearch);
//   } catch (err) {
//     console.log(err);
//     console.error(err);
//     res.statusCode = 500;
//   }
// }