import React, { FC } from 'react';
import { Container, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import { AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { FaRss } from "react-icons/fa"

type Name = {
  name: string
}

const useStyles = createStyles(() => ({
  title: {
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      paddingTop: '3rem',
    },
  },
  snsIcons: {
    display: 'flex',
    color: 'white',
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
          <Title order={1} className='text-white' >自分のサイトまとめ</Title>
          <Text className='text-white'>{name}のポートフォリオのためのページです。</Text>
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