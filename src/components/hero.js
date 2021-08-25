import * as React from 'react'
import * as styles from './hero.module.scss'
import classNames from 'classnames'
import Typography from './typography'
import Button from './button'

const Hero = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <div className={styles.mainBox}>
        <Typography variant="h1" className={styles.textGradient}>
          Here is our vision that we are sharing with you
        </Typography>
        <div className={styles.buttonWrapper}>
          <Button>
            Try Holium
          </Button>
          <Button secondary>
            Learn more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero