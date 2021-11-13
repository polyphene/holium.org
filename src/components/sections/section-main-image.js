import * as React from 'react'
import * as styles from './section-main-image.module.scss'
import classNames from 'classnames'
import Typography from '../misc/typography'
import WavyWhiteLayout from '../layouts/wavy-white-layout'
import topSeparator from '../../images/separator-0.svg'
import bottomSeparator from '../../images/separator-1.svg'
import Image from '../../images/svg-assets/main-image.svg'

const SectionMainImage = () => {
  return (
    <WavyWhiteLayout
      topSeparator={topSeparator}
      topSeparatorHeight={''}
      topMargin={'16vw'}
      bottomSeparator={bottomSeparator}
      bottomSeparatorHeight={''}
      bottomMargin={'16vw'}
    >
      <div className={classNames('container', styles.wrapper)}>
        <Typography variant="h2">
          Best insights are always one transformation away.
        </Typography>
        <Typography variant="body3" className={styles.text}>
          With Holium, teams around the world collaborate on the transformation
          of all types of data to unlock the best insights.
        </Typography>
        <div className={styles.imageWrapper}>
          <Image className={styles.image}/>
        </div>
      </div>
    </WavyWhiteLayout>
  )
}

export default SectionMainImage