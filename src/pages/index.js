import * as React from 'react'
import '../styles/global.scss'
import * as styles from './index.module.scss'
import Header from '../components/header'
import Hero from '../components/hero'
import SectionWhyHolium from '../components/section-why-holium'
import SectionSlideshow from '../components/section-slideshow'

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <Header/>
        <Hero/>
        <SectionWhyHolium/>
        <SectionSlideshow/>
      </main>
  )
}

export default IndexPage
