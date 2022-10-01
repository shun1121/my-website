import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../../src/styles/Home.module.css";
import Top from "../components/top";
import PortfolioSection from "../components/portfolioSection";
import { portfolio } from "../components/portfolioList";
import Github from "../components/githubComponent";
import {
  Container,
  createStyles,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Loader,
} from "@mantine/core";
import Twitter from "../components/twitterComponent";
import { client } from "../libs/cmsClient";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";
import { FC, useEffect, useState } from "react";
import LinkButton from "../components/button";
import useSWR from "swr";
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export type Blog = {
  title: string;
  body: string;
};

export type Data = {
  contents: {
    body: string;
    createdAt: string;
    id: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    updatedAt: string;
  }[];
  limit: number;
  offset: number;
  totalCount: number;
};

export type User = {
  users: {
    id: string;
    name: string;
    profile_image_url: string;
    username: string;
  }[];
};

export type Tweets = {
  data: {
    author_id: string;
    context_annotations?: {
      domain: {
        description: string;
        id: string;
        name: string;
      };
      entry: {
        id: string;
        name: string;
      };
    }[];
    conversation_id: string;
    created_at: string;
    id: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
    text: string;
  }[];
  includes: User;
  meta: {
    newest_id: string;
    next_token: string;
    oldest_id: string;
    result_count: number;
  };
};

type Props = {
  blogData: BlogData;
  tweets: Tweets;
  githubData: any;
};

type BlogData = MicroCMSListResponse<Blog>;

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
  // console.log(data);
  const githubList = props.githubData.user.repositories.nodes;
  // console.log(props.githubData);
  const [isClient, setIsClient] = useState(false);
  const { classes } = useStyles();
  const isMobile = useMediaQuery({
    query: "(max-width: 400px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 401px)",
  });

  const blog = () => {
    if (isClient) {
      if (isMobile) {
        return props.blogData.contents.slice(0, 4).map((list, index) => (
          <Link key={index} href={`/blog/${list.id}`} passHref>
            <a>
              <Stack key={index} className="mb-6">
                <Title order={2}>{list.title}</Title>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: list.body,
                  }}
                />
                {dayjs(list.createdAt).format("YYYY年MM月DD日")}
              </Stack>
            </a>
          </Link>
        ));
      } else if (isLaptop) {
        return props.blogData.contents.slice(0, 5).map((list, index) => (
          <Link key={index} href={`/blog/${list.id}`} passHref>
            <a>
              <Stack key={index} className="mb-6">
                <Title order={2}>{list.title}</Title>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: list.body,
                  }}
                />
                {dayjs(list.createdAt).format("YYYY年MM月DD日")}
              </Stack>
            </a>
          </Link>
        ));
      }
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        <div>{blog()}</div>
        <LinkButton text="View All" href="/blog" />
      </Container>
      <PortfolioSection portfolioSection={portfolio} />
      <SimpleGrid cols={2} spacing="xs">
        {/* <Github github={githubList} /> */}
        <Container className='w-1/2'>

        <Title order={1} className={classes.heading}>GitHub</Title>
          {props.githubData?.user.repositories.nodes.map((value:any, index:any) => (
            <Github
              key={index}
              name={value.name}
              description={value.description}
              stars={value.stargazerCount}
              forks={value.forkCount}
              url={value.url}
              languages={value.languages}
            />
          ))}
          <LinkButton text="View on GitHub" href="/" />
        </Container>
        {data ? (
          <Twitter twitter={data} />
        ) : error ? (
          <Text>エラー</Text>
        ) : (
          <Loader className="mx-auto my-auto" />
        )}
      </SimpleGrid>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.getList<Blog>({
    endpoint: "blogs",
  });

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await apolloClient.query({
    query: gql`
      {
        user(login: "shun1121") {
          name
          url
          repositories(
            first: 5
            orderBy: { field: CREATED_AT, direction: ASC }
            privacy: PUBLIC
          ) {
            nodes {
              createdAt
              description
              forkCount
              name
              stargazerCount
              url
              languages(first: 5, orderBy: { field: SIZE, direction: ASC }) {
                nodes {
                  color
                  name
                }
                totalCount
                totalSize
                edges {
                  node {
                    color
                    id
                    name
                  }
                  size
                }
              }
            }
          }
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {
      blogData: blogData,
      githubData: data,
    },
    revalidate: 60,
  };
};

export default Home;
