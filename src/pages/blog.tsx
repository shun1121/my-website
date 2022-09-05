import React from 'react';
import { Container, createStyles, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link'
import { client } from '../utils/client';
import { GetStaticProps, NextPage } from 'next';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { Blog } from '../pages';
import dayjs from 'dayjs'
import LinkButton from '../components/button';

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
  postsWrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
    },
    width: '100%',
    height: '280px',
    maxHeight: '280px',
    borderRadius: '15px',
    position: 'relative',
    cursor: 'pointer',
  },
  button: {
    width: '120px',
    height: '44px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: '5px',
  },
}));

const Blog: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const { classes } = useStyles();
  const blogList = props.contents
  // const blogList = props　これだとエラーが出る。
  console.log(props)

  return (
    <Container>
      <Title order={1} className={classes.heading}>Blog</Title>
      {blogList.map((list, index) => (
        <Link key={index} href={`/blog/${list.id}`} passHref>
          <a>
            <Stack key={index} className='mb-6'>
              <Title order={2}>{list.title}</Title>
              <Text
                dangerouslySetInnerHTML={{
                  __html: list.content
                }} />
              {dayjs(list.updatedAt).format('YYYY年MM月DD日')}
            </Stack>
          </a>
        </Link>
      ))}
      <LinkButton text="View All" href="/blog" />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client
  .getList({
    endpoint: 'blogs',
  });
  console.log(data)
  return {
    props: data,
    // props: data.contents これだとエラーが出る。
  }
}

export default Blog
