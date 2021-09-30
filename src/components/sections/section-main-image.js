import * as React from 'react'
import * as styles from './section-main-image.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import WavyWhiteLayout from '../layouts/wavy-white-layout'
import topSeparator from '../../images/separator-0.svg'
import bottomSeparator from '../../images/separator-1.svg'
import { StaticImage } from 'gatsby-plugin-image'

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
        <StaticImage src={'../../images/main-image-placeholder.svg'}
                     alt={'placeholder'}
                     placeholder={'blurred'}
        />
      </div>
    </WavyWhiteLayout>
  )
}

export default SectionMainImage