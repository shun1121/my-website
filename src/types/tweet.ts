type User = {
  users: {
    id: string;
    name: string;
    profile_image_url: string;
    username: string;
  }[];
};

export type Tweets = {
  data: {
    author_id: string;
    context_annotations?: {
      domain: {
        description: string;
        id: string;
        name: string;
      };
      entry: {
        id: string;
        name: string;
      };
    }[];
    conversation_id: string;
    created_at: string;
    id: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
    text: string;
  }[];
  includes: User;
  meta: {
    newest_id: string;
    next_token: string;
    oldest_id: string;
    result_count: number;
  };
};