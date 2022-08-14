import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../src/styles/Home.module.css";
import { HeaderSimple } from "../components/header";
import { Footer } from "../components/footer"
import Top from "../components/top";
import BlogList from "../components/blogList";
import PortfolioSection from "../components/portfolioSection";

const links = [
  {
    link: "/about",
    label: "About"
  },
  {
    link: "/blog",
    label: "Blog"
  },
  {
    link: "/portfolio",
    label: "Portfolio"
  },
  {
    link: "contact",
    label: "Contact"
  }
]

const blogList = [
  {
    title: "This is a header",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11"
  },
  {
    title: "This is a header",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11"
  },
  {
    title: "This is a header",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11"
  },
  {
    title: "This is a header",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11"
  },
  {
    title: "This is a header",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11"
  }
]

const portfolio = [
  {
    imgUrl: "/images/kv.jpg",
    title: "IT KINGDOM",
    description: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.07.11"
  },
  {
    imgUrl: "/images/kv.jpg",
    title: "IT KINGDOM",
    description: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.07.11"
  },
  {
    imgUrl: "/images/kv.jpg",
    title: "IT KINGDOM",
    description: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.07.11"
  },
  {
    imgUrl: "/images/kv.jpg",
    title: "IT KINGDOM",
    description: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.07.11"
  },
  {
    imgUrl: "/images/kv.jpg",
    title: "IT KINGDOM",
    description: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.07.11"
  },
  {
    imgUrl: "/images/kv.jpg",
    title: "IT KINGDOM",
    description: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    date: "2022.07.11"
  },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSimple links={links} />
      <Top name="私" />
      <BlogList blogList={blogList} />
      <PortfolioSection portfolioSection={portfolio} />

      <Footer />
    </div>
  );
};

export default Home;
