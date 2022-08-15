import React, { FC } from 'react';
import { Button, Container, createStyles, Stack, Text, Title } from '@mantine/core';

type BlogList = {
  blogList: {    
    title: string
    description: string
    date: string
  }[]
}

const useStyles = createStyles((theme) => ({
  heading: {
    marginTop: '6rem',
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

const BlogListSection: FC<BlogList> = ({blogList}) => {
  const { classes } = useStyles();

  return (
    <Container>
      <Title order={1} className={classes.heading}>Blog</Title>
      {blogList.map((list, index) => (
        <Stack key={index} className='mb-6'>
          <Title order={2}>{list.title}</Title>
          <Text>{list.description}</Text>
          <Text>{list.date}</Text>
        </Stack>
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