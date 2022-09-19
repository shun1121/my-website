declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SERVICE_DOMAIN: string;
    NEXT_PUBLIC_API_KEY: string;
    TWITTER_BEARER_TOKEN: string;
    readonly USER_ID: string;
  }
}