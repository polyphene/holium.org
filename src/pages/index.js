import * as React from 'react'
import '../styles/global.scss'
import * as styles from './index.module.scss'
import Header from '../components/header'
import Hero from '../components/hero'
import SectionWhyHolium from '../components/section-why-holium'
import SectionSlideshow from '../components/section-slideshow'
import SectionTerminal from '../components/section-terminal'
import SectionAdditionalInformation
  from '../components/section-addtional-information'

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <Header/>
        <Hero/>
        <SectionWhyHolium/>
        <SectionSlideshow/>
        <SectionTerminal/>
        <SectionAdditionalInformation/>
      </main>
  )
}

export default IndexPage
