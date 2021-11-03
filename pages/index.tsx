import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Sms } from "@mui/icons-material";
import NumberButton from "../components/NumberButton";
import { useState } from "react";
import TablesPicker from "../components/TablesPicker";
import AnswerPicker from "../components/AnswerPicker";
import Question from "../components/Question";

const Home: NextPage = () => {
  const [tables, setTables] = useState<number[]>([2, 5, 10]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn your time tables!</title>
        <meta name="description" content="Learn your tables" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <TablesPicker selected={tables} onSelect={setTables} />

        <Question
          first={3}
          second={5}
          onReply={(success) => console.log("success", success)}
        />
      </p>
    </div>
  );
};

export default Home;
