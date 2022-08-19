import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../src/styles/Home.module.css";
import Top from "../components/top";
import BlogListSection from "../components/blogListSection";
import PortfolioSection from "../components/portfolioSection";
import { blogList } from "../components/blogList";
import { portfolio } from "../components/portfolioList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top name="私" />
      <BlogListSection blogList={blogList} />
      <PortfolioSection portfolioSection={portfolio} />
    </div>
  );
};

export default Home;
