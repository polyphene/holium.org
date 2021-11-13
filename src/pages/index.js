import * as React from 'react'
import '../styles/global.scss'
import * as styles from './index.module.scss'
import Header from '../components/sections/header'
import Hero from '../components/sections/hero'
import SectionCommunityLinks
  from '../components/sections/section-community-links'
import SectionAdditionalInformation
  from '../components/sections/section-additional-information'
import Footer from '../components/sections/footer'
import SectionVideo from '../components/sections/section-video'
import SectionMainImage from '../components/sections/section-main-image'
import SectionPrinciples from '../components/sections/section-principles'
import SEO from '../components/misc/seo'

const IndexPage = () => {
  return (
    <>
      <SEO/>
      <main className={styles.main}>
        <Header/>
        <Hero/>
        <SectionVideo/>
        <SectionMainImage/>
        <SectionPrinciples/>
        <SectionCommunityLinks/>
        <SectionAdditionalInformation/>
        <Footer/>
      </main>
    </>
  )
}

export default IndexPage
