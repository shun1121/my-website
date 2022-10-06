import { MicroCMSListResponse } from "microcms-js-sdk";

export type Blog = {
  title: string;
  body: string;
};

export type BlogData = MicroCMSListResponse<Blog>;