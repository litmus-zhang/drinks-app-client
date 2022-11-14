import Head from "next/head";
import Image from "next/image";
import AuthPage from "../components/AuthPage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextgen E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthPage />
      </main>
    </div>
  );
}
