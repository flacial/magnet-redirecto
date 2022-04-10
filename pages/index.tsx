import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Magnet Redirecto</title>
        <meta name="description" content="Magnet to URL or something like that" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Example
          <code className={styles.code}>
            {`/api/link/<magnetString>`}
          </code>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/flacial/magnet-redirecto"
          target="_blank"
          rel="noopener noreferrer"
        >
        Find it on GitHub
        </a>
      </footer>
    </div>
  )
}

export default Home
