import React, { FC } from 'react';
import { Container, createStyles, Text, Title } from '@mantine/core';


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
}));

const About: FC<BlogList> = ({blogList}) => {
  const { classes } = useStyles();

  return (
    <div>
      <Container className='h-screen'>
        <Title order={1} className={classes.heading}>About</Title>
        <Text className='text-3xl my-8'>
          しゅん
        </Text>
        <Text>
          新卒のフロントエンドエンジニアです。
        </Text>
      </Container>
    </div>
  )
}

export default About