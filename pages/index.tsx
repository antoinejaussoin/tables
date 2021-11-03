import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Sms } from "@mui/icons-material";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn your time tables!</title>
        <meta name="description" content="Learn your tables" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello</h1>

      <p>
        <Sms />
      </p>
    </div>
  );
};

export default Home;
