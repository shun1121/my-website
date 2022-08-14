import React, { FC } from 'react';
import { Container, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import { AiOutlineTwitter } from "react-icons/Ai"
import { BsFacebook } from "react-icons/Bs"
import { FaRss } from "react-icons/Fa"

type Name = {
  name: string
}

const useStyles = createStyles((theme) => ({
  title: {
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      paddingTop: '3rem',
    },
  },
  snsIcons: {
    display: 'flex',
    '@media (max-width: 768px)': {
      marginTop: '2.5rem',
    },
  },
}));

const Top: FC<Name> = ({ name }) => {
  const { classes } = useStyles();

  return (
    <div className='bg-pink-500 h-64'>
      <Container className='h-64 w-full md:flex md:justify-between'>
        <Stack className={classes.title}>
          <Title order={1}>Shimabu IT University</Title>
          <Text>{name}のポートフォリオのためのページです。</Text>
        </Stack>
        <Group className={classes.snsIcons} >
          <AiOutlineTwitter className='w-7 h-7' />
          <BsFacebook className='w-7 h-7' />
          <FaRss className='w-7 h-7' />
        </Group>
      </Container>
    </div>
  )
}

export default Top