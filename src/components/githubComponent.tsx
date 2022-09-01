import React, { FC } from 'react';
import { Container, createStyles, Stack, Text, Title } from '@mantine/core';
import LinkButton from './button';

type Github = {
  github: {
    repositoryName: string
    description: string
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

const Github: FC<Github> = ({github}) => {
  const { classes } = useStyles();

  return (
    // <div>
      <Container className='w-1/2'>
      <Title order={1} className={classes.heading}>GitHub</Title>
      {github.map((list, index) => (
        // <Link key={index} href={`/blog/${index}`} passHref>
        //   <a>
            <Stack key={index} className='mb-6'>
              <Text className='font-bold text-lg'>{list.repositoryName}</Text>
              <Text>{list.description}</Text>
            </Stack>
        //   </a>
        // </Link>
      ))}
      <LinkButton text="View on GitHub" href="/" />
    </Container>
    // </div>
  )
}

export default Github