import React, { FC } from 'react';
import { Container, createStyles, Stack, Text, Title } from '@mantine/core';
import ButtonComponent from './button';

type Twitter = {
  twitter: {
    name: string
    tweet: string
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

const Twitter: FC<Twitter> = ({twitter}) => {
  const { classes } = useStyles();

  return (
    // <div>
      <Container className='w-1/2'>
      <Title order={1} className={classes.heading}>Twitter</Title>
      {twitter.map((list, index) => (
        // <Link key={index} href={`/blog/${index}`} passHref>
        //   <a>
            <Stack key={index} className='mb-6'>
              <Text className='font-bold text-lg'>{list.name}</Text>
              <Text>{list.tweet}</Text>
            </Stack>
        //   </a>
        // </Link>
      ))}
      <ButtonComponent text="View on Twitter" />
    </Container>
    // </div>
  )
}

export default Twitter