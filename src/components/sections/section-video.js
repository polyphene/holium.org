import * as React from 'react'
import * as styles from './section-video.module.scss'
import Frame from '../frame'
import { StaticImage } from 'gatsby-plugin-image'

const SectionVideo = () => {
  return (
    <div className={styles.wrapper}>
      <Frame>
        <StaticImage src={'../../images/video-placeholder.png'}
                     alt={'video placeholder'}
                     placeholder={'blurred'}
        />
      </Frame>
    </div>
  )
}

export default SectionVideo