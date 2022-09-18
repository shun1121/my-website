import React, { FC } from 'react';
import { Container, createStyles, Stack, Text, Title } from '@mantine/core';
import LinkButton from './button';
import { Tweets, User } from '../pages';

// type Twitter = {
//   twitter: {
//     name: string
//     tweet: string
//   }[]
// }

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

const Twitter: FC<{twitter: Tweets}> = ({twitter}) => {
  const { classes } = useStyles();
  console.log("AAAAAAAA")
  console.log(twitter)

  return (
    // <div>
      <Container className='w-1/2'>
      <Title order={1} className={classes.heading}>Twitter</Title>
      {twitter.data.map((list, index) => (
        // <Link key={index} href={`/blog/${index}`} passHref>
        //   <a>
            <Stack key={index} className='mb-6'>
              <Text className='font-bold text-lg'>{twitter.includes.users[0].username}</Text>
              <Text>{list.text}</Text>
            </Stack>
        //   </a>
        // </Link>
      ))}
      <LinkButton text="View on Twitter" href="/" />
    </Container>
    // </div>
  )
}

export default Twitter