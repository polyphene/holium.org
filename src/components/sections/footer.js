import * as React from 'react'
import * as styles from './footer.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import { StaticImage } from 'gatsby-plugin-image'
import topSeparator from '../../images/separator-4.svg'
import WavyWhiteLayout from '../layouts/wavy-white-layout'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <WavyWhiteLayout
      topSeparator={topSeparator}
      topSeparatorHeight={''}
      topMargin={'16vw'}
    >
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.column}>
          <Link to={'/'}>
            <StaticImage src={'../../images/logo-dark.svg'} alt={'Holium logo'}
                         width={200}
                         placeholder={'none'}
                         className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.column}>
          <Link to={'#'}>
            <Typography variant="body3"><i
              className={'ci-home_alt_fill'}/> Documentation</Typography>
          </Link>
          <Link to={'https://discord.gg/A3t5ZFSbCG'}>
            <Typography variant="body3"><i
              className={'ci-discord'}/> Discord</Typography>
          </Link>
          <Link to={'https://github.com/polyphene'}>
            <Typography variant="body3"><i
              className={'ci-github'}/> Github</Typography>
          </Link>
        </div>
        <div className={styles.column}>
          <Link to={'https://twitter.com/polyphenehq/'}>
            <Typography variant="body3">About us</Typography>
          </Link>
        </div>
      </div>
    </WavyWhiteLayout>
  )
}

export default Footer