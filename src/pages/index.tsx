import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../../src/styles/Home.module.css";
import Top from "../components/top";
import PortfolioSection from "../components/portfolioSection";
import { portfolio } from "../components/portfolioList";
import Github from "../components/githubComponent";
import { githubList } from "../components/gitHubList";
import { Container, createStyles, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import Twitter from "../components/twitterComponent";
import { twitterList } from "../components/twitterList";
import { client } from '../libs/client'
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import ButtonComponent from "../components/button";
import dayjs from 'dayjs'

export type Blog = {
  title: string
  content: string
}

type Props = MicroCMSListResponse<Blog>

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

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const { classes } = useStyles();
  const blogList = props.contents
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top name="私" />
      <Container>
        <Title order={1} className={classes.heading}>Blog</Title>
        {props.contents.map((list, index) => (
          <Link key={index} href={`/blog/${list.id}`} passHref>
            <a>
              <Stack key={index} className='mb-6'>
                <Title order={2}>{list.title}</Title>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: list.content
                  }} />
                {dayjs(list.createdAt).format('YYYY年MM月DD日')}
              </Stack>
            </a>
          </Link>
        ))}
        <ButtonComponent text="View All" />
    </Container>
      <PortfolioSection portfolioSection={portfolio} />
      <SimpleGrid cols={2} spacing="xs" >
        <Github github={githubList} />
        <Twitter twitter={twitterList} />
      </SimpleGrid>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client
  .getList({
    endpoint: 'blogs',
  });
  return {
    props: data,
  }
}

export default Home;
