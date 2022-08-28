import React, { FC } from 'react';
import { blogList } from "../components/blogList";
import BlogListSection from "../components/blogListSection";

type BlogList = {
  blogList: {    
    title: string
    description: string
    date: string
  }[]
}

const Blog: FC<BlogList> = () => {
  return (
    <div>
      {/* <BlogListSection blogList={blogList} /> */}
    </div>
  )
}

export default Blog