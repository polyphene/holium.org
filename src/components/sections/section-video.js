import * as React from 'react'
import * as styles from './section-video.module.scss'
import Frame from '../misc/frame'

const SectionVideo = () => {
  return (
    <div className={styles.wrapper}>
      <Frame>
        <div className={styles.iframeContainer}>
          <iframe className={styles.responsiveIframe}
                  src="https://www.youtube.com/embed/OlQwiaijBq4"
                  title="Holium In 2 Minutes" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
        </div>
      </Frame>
    </div>
  )
}

export default SectionVideo