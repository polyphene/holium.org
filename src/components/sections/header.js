import * as React from 'react'
import * as styles from './header.module.scss'
import classNames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <StaticImage src={'../../images/logo-white.svg'} alt={'Holium logo'}
                   width={251}
                   placeholder={'none'}
      />
    </div>
  )
}

export default Header