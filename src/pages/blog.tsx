import React, { FC } from 'react';
import { Container, createStyles, Stack, Text, Title } from '@mantine/core';
import { blogList } from "../components/blogList";
import BlogListSection from "../components/blogListSection";
import { HeaderSimple } from '../components/header';
import { links } from '../components/link';
import { Footer } from '../components/footer';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'


type BlogList = {
  blogList: {    
    title: string
    description: string
    date: string
  }[]
}

const useStyles = createStyles((theme) => ({
  heading: {
    marginTop: '4rem',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #E9ECEF',
    '@media (max-width: 768px)': {
      marginTop: '2.5rem',
      paddingTop: '0px',
      paddingBottom: '1.5rem',
    },
  },
  snsIcons: {
    display: 'flex',
    '@media (max-width: 768px)': {
      marginTop: '2.5rem',
    },
  },
}));

const Blog: FC<BlogList> = () => {
  const { classes } = useStyles();
  console.log(blogList)

  return (
    <div>
      <HeaderSimple links={links} />
      <BlogListSection blogList={blogList} />
      <Container>
      </Container>
      <Footer />
    </div>
  )
}

export default Blog