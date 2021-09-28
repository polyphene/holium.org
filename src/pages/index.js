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
import Banner from '../components/sections/banner'
import SectionVideo from '../components/sections/section-video'
import SectionMainImage from '../components/sections/section-main-image'

const IndexPage = () => {
  return (
      <main className={styles.main}>
        <Banner/>
        <Header/>
        <Hero/>
        <SectionVideo/>
        <SectionMainImage/>
        <SectionWhyHolium/>
        <SectionSlideshow/>
        <SectionTerminal/>
        <SectionAdditionalInformation/>
        <Footer/>
      </main>
  )
}

export default IndexPage
