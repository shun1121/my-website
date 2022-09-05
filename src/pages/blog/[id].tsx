import React from 'react';
import { Container, createStyles, Text, Title } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { client } from '../../libs/client';
import { Blog } from '..';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import dayjs from 'dayjs'

type Props = Blog & MicroCMSContentId & MicroCMSDate

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

const Portfolio: NextPage<Props> = (props) => {
  const { classes } = useStyles();

  return (
    <div>
      <Container className='h-screen'>
        <Title order={1} className={classes.heading}>{props.title}</Title>
        <Text>
          {dayjs(props.updatedAt).format('YYYY年MM月DD日')}
        </Text>
        <Text dangerouslySetInnerHTML={{ __html: props.body }} />
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({endpoint: 'blogs'});
  const ids = data.contents.map((content) => `/blog/${content.id}`)
  return {
    paths: ids,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (context) => {
  if (!context.params) {
    return { notFound: true }
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: context.params.id,
  })
  return {
    props: data,
  };
}

export default Portfolio