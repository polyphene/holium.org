import * as React from 'react'
import * as styles from './header.module.scss'
import classNames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../button'
import Typography from '../typography'

const Header = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <StaticImage src={'../../images/logo-white.svg'} alt={'Holium logo'}
                   width={251}
                   placeholder={'none'}
      />
      <div className={styles.spacer}/>
      <Typography variant="h4" className={styles.documentationLink}>
        Documentation
      </Typography>
      <Button secondary className={styles.contactButton}>
        Contact us
      </Button>
    </div>
  )
}

export default Header