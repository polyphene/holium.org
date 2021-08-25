import * as React from 'react'
import '../styles/global.scss'
import * as styles from './index.module.scss'
import Header from '../components/header'
import Hero from '../components/hero'

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <Header/>
        <Hero/>
      </main>
  )
}

export default IndexPage
