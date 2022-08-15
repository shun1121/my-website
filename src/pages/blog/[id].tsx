import React from 'react';
import { Container, createStyles, Text, Title } from '@mantine/core';
import { blogList } from "../../components/blogList";
import { HeaderSimple } from '../../components/header';
import { links } from '../../components/link';
import { Footer } from '../../components/footer';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Blog = {
  data: {
    title: string
    description: string
    date: string
  }
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
}));

const Portfolio:NextPage<Blog> = (props) => {
  const { classes } = useStyles();

  return (
    <div>
      <HeaderSimple links={links} />
      <Container className='h-screen'>
        <Title order={1} className={classes.heading}>{props.data.title}</Title>
        <Text className='my-8'>
          {props.data.date}
        </Text>
        <Text>
          {props.data.description}
        </Text>
      </Container>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const list = blogList
  const ids = list.map((_, index) => `/blog/${index}`)
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return { notFound: true }
  }
  const blogId = Number(context.params.id)
  const data = blogList[blogId]
  return {
    props: { data },
  };
}

export default Portfolio