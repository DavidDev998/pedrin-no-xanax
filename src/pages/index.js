import Head from 'next/head'
import styles from '../styles/Home.module.css'

import CountDown from '../components/countDown'
import { useEffect, useRef, useState } from 'react'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pedrin no Xanax</title>
        <meta name="description" content="Contador de dias do pedrinho sem xanax" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          A quanto tempo o <a href="https://twitter.com/AmIPedrin" target="_blank" rel="noreferrer">Pedrinho</a> está sóbrio!
        </h1>
        <iframe width="1864" height="801" src="/musica.mp3?autoplay=1" title="musica" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen hidden></iframe>

        <CountDown/>
       
      </main>
    </div>
  )
}
