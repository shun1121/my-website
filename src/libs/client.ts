import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "my-website", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "f38f42d07e7342f8b0458ddfd21374b1e57c",
});