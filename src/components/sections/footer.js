import * as React from 'react'
import * as styles from './footer.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.column}>
          <StaticImage src={'../../images/logo-white.svg'} alt={'Holium logo'}
                       width={200}
                       placeholder={'none'}
                       className={styles.logo}
          />
        </div>
        <div className={styles.column}>
          <Typography variant='body3'><i className={'ci-home_alt_fill'}/> Documentation</Typography>
          <Typography variant='body3'><i className={'ci-discord'}/> Discord</Typography>
          <Typography variant='body3'><i className={'ci-github'}/> Github</Typography>
        </div>
        <div className={styles.column}>
          <Typography variant='body3'>About us</Typography>
          <Typography variant='body3'>Media kit</Typography>
        </div>
      </div>
  )
}

export default Footer