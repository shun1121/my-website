import React, { FC } from 'react';
import { Button, Container, createStyles, Stack, Text, Title } from '@mantine/core';
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

const About: FC<BlogList> = ({blogList}) => {
  const { classes } = useStyles();

  return (
    <div>
      <HeaderSimple links={links} />
      <Container className='h-screen'>
        <Title order={1} className={classes.heading}>About</Title>
        <Text className='text-3xl my-8'>
          しゅん
        </Text>
        <Text>
          新卒のフロントエンドエンジニアです。
        </Text>
      </Container>
      <Footer />
    </div>
  )
}

export default About