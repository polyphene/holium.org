import * as React from 'react'
import * as styles from './video.module.scss'
import Frame from '../frame'
import { StaticImage } from 'gatsby-plugin-image'

const Video = () => {
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

export default Video