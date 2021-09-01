import * as React from 'react'
import '../styles/global.scss'
import * as styles from './index.module.scss'
import Header from '../components/sections/header'
import Hero from '../components/sections/hero'
import SectionWhyHolium from '../components/sections/section-why-holium'
import SectionSlideshow from '../components/sections/section-slideshow'
import SectionTerminal from '../components/sections/section-terminal'
import SectionAdditionalInformation
  from '../components/sections/section-addtional-information'
import Footer from '../components/sections/footer'

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <Header/>
        <Hero/>
        <SectionWhyHolium/>
        <SectionSlideshow/>
        <SectionTerminal/>
        <SectionAdditionalInformation/>
        <Footer/>
      </main>
  )
}

export default IndexPage
