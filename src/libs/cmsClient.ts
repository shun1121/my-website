import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN, // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
