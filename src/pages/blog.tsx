import React, { FC } from 'react';
import { blogList } from "../components/blogList";
import BlogListSection from "../components/blogListSection";
import { HeaderSimple } from '../components/header';
import { links } from '../components/link';
import { Footer } from '../components/footer';

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
      <HeaderSimple links={links} />
      <BlogListSection blogList={blogList} />
      <Footer />
    </div>
  )
}

export default Blog