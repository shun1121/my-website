import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Top from "@/components/Top/Top";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import { portfolio } from "@/components/Portfolio/PortfolioList";
import Github from "@/components/Github/Github";
import Twitter from "@/components/Twitter/Twitter";
import { client } from "@/libs/cmsClient";
import { FC } from "react";
import LinkButton from "@/components/Button/Button";
import useSWR from "swr";
import { apolloClient } from "@/libs/apolloClient";
import { GithubProps, GithubType } from "@/types/github";
import { query } from "@/libs/getGithubData";
import { Blog, BlogData } from "@/types/blog";
import { Tweets } from "@/types/tweet";
import { BlogList } from "@/components/Blog/Blog";
import {
  Container,
  createStyles,
  Text,
  Title,
  Loader,
  Grid,
} from "@mantine/core";

type Props = {
  blogData: BlogData;
  tweets: Tweets;
  githubData: GithubProps[];
};

const useStyles = createStyles((theme) => ({
  heading: {
    marginTop: "4rem",
    marginBottom: "2rem",
    paddingBottom: "2rem",
    borderBottom: "2px solid #E9ECEF",
    "@media (max-width: 768px)": {
      marginTop: "2.5rem",
      paddingTop: "0px",
      paddingBottom: "1.5rem",
    },
  },
  postsWrapper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3],
    },
    width: "100%",
    height: "280px",
    maxHeight: "280px",
    borderRadius: "15px",
    position: "relative",
    cursor: "pointer",
  },
  button: {
    width: "120px",
    height: "44px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: "5px",
  },
}));

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

const Home: FC<Props> = (props) => {
  const { data, error } = useSWR<Tweets>("/api/twitter", fetcher);
  const { classes } = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top name="私" />
      <Container>
        <Title order={1} className={classes.heading}>
          Blog
        </Title>
        <BlogList blogData={props.blogData} />
        <LinkButton text="View All" href="/blog" />
      </Container>
      <PortfolioSection portfolioSection={portfolio} />
      <Container>
        <Grid>
          <Grid.Col sm={6}>
            <Title order={1} className={classes.heading}>
              GitHub
            </Title>
            {props.githubData.map((repository, index) => {
              return (
                <Github
                  key={index}
                  name={repository.name}
                  description={repository.description}
                  stars={repository.stars}
                  forks={repository.forks}
                  url={repository.url}
                  languages={repository.languages}
                />
              );
            })}
            <LinkButton text="View on GitHub" href="/" />
          </Grid.Col>
          <Grid.Col sm={6}>
            {data ? (
              <Container>
                <Title order={1} className={classes.heading}>
                  Twitter
                </Title>
                <Twitter twitter={data} />
                <LinkButton
                  text="View on Twitter"
                  href={`https://twitter.com/${data.includes.users[0].username}`}
                />
              </Container>
            ) : 
            error ? (
              <Text>エラー</Text>
            ) : (
              <Loader className="mx-auto my-auto" />
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.getList<Blog>({
    endpoint: "blogs",
  });

  const { data } = await apolloClient.query<GithubType>({
    query: query,
    variables: {
      user_id: process.env.GITHUB_USER_ID,
    },
  });

  return {
    props: {
      blogData: blogData,
      githubData: data.user.repositories.nodes.map((repository) => {
        const languages = repository.languages.edges.map((val) => {
          return {
            name: val.node.name,
            color: val.node.color,
            ratio: val.size / repository.languages.totalSize, // 各言語のサイズ / リポジトリ全体の言語サイズ
          };
        });
        return {
          name: repository.name,
          description: repository.description,
          stars: repository.stargazerCount,
          forks: repository.forkCount,
          url: repository.url,
          languages,
        };
      }),
    },
    revalidate: 60,
  };
};

export default Home;
