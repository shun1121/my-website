import React, { FC } from 'react';
import { Container, createStyles, Grid, Image, Text, Title } from '@mantine/core';
import Link from 'next/link'
import LinkButton from '@/components/Button/Button';

type PortfolioSection = {
  portfolioSection: {
    imgUrl: string
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
  postsWrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
    },
    width: '100%',
    height: '350px',
    maxHeight: '350px',
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

const PortfolioSection: FC<PortfolioSection> = ({portfolioSection}) => {
  const { classes } = useStyles();

  return (
    <div className='px-10'>
      <Title order={1} className={classes.heading}>Portfolio</Title>
      <Grid gutter={40}>
        {portfolioSection.map((item, index) => (
          <Grid.Col key={index} sm={4}>
            <Link href="/" passHref>
              <div className={classes.postsWrapper}>
                <a>
                  <Image src={item.imgUrl} height={160} alt='cover_image' />
                  <Text weight={700} size='xl' className='line-clamp-2 my-3'>
                    {item.title}
                  </Text>
                  <Text className='my-1'>{item.description}</Text>
                  <Text>{item.date}</Text>
                </a>
              </div>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
      <LinkButton text="View All" href="/portfolio" />
    </div>
  )
}

export default PortfolioSection