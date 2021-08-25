import * as React from 'react'
import * as styles from './footer.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import { StaticImage } from 'gatsby-plugin-image'
import topSeparator from '../../images/separator-4.svg'
import WavyWhiteLayout from '../layouts/wavy-white-layout'

const Footer = () => {
  return (
    <WavyWhiteLayout
      topSeparator={topSeparator}
      topSeparatorHeight={''}
      topMargin={'16vw'}
    >
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.column}>
          <StaticImage src={'../../images/logo-dark.svg'} alt={'Holium logo'}
                       width={200}
                       placeholder={'none'}
                       className={styles.logo}
          />
        </div>
        <div className={styles.column}>
          <Typography variant='h2'>Support</Typography>
          <Typography variant='body3'>Documentation</Typography>
          <Typography variant='body3'>Community</Typography>
          <Typography variant='body3'>Contact Holium</Typography>
        </div>
        <div className={styles.column}>
          <Typography variant='h2'>Company</Typography>
          <Typography variant='body3'>About us</Typography>
          <Typography variant='body3'>Blog</Typography>
          <Typography variant='body3'>Media kit</Typography>
        </div>
      </div>
    </WavyWhiteLayout>
  )
}

export default Footer