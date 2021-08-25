import * as React from 'react'
import '../styles/global.scss'
import * as styles from './index.module.scss'
import Header from '../components/header'

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <Header/>
      </main>
  )
}

export default IndexPage
