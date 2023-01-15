import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import SearchBar from "../src/searchbar";
import Image from 'next/image'


export default function Home() {
    return (
    <>
      <Head>
        <title>wiki Harry potter</title>
        <meta name="description" content="Find out all about series/novel Harry Potter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Image src={"/Logo.png"} alt="Harry Potter" width={200} height={200}  />
          <div className={styles.center}>
            <SearchBar/>
          </div>
      </main>
    </>
  )
}
