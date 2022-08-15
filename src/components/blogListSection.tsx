import React, { FC } from 'react';
import { Button, Container, createStyles, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link'

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

const BlogListSection: FC<BlogList> = ({blogList}) => {
  const { classes } = useStyles();

  return (
    <Container>
      <Title order={1} className={classes.heading}>Blog</Title>
      {blogList.map((list, index) => (
        <Link key={index} href={`/blog/${index}`} passHref>
          <a>
            <Stack key={index} className='mb-6'>
              <Title order={2}>{list.title}</Title>
              <Text>{list.description}</Text>
              <Text>{list.date}</Text>
            </Stack>
          </a>
        </Link>
      ))}
      <Stack align="center">
        <Button className="bg-black" color="dark" radius="xl" size="lg">
          View All
        </Button>
      </Stack>
    </Container>
  )
}

export default BlogListSection