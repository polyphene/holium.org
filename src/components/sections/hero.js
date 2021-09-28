import * as React from 'react'
import * as styles from './hero.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import Button from '../button'

const Hero = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <div className={styles.mainBox}>
        <Typography variant="h1" className={styles.textGradient}>
          Freely transform data.
        </Typography>
        <Typography variant='body2' className={styles.subTitle}>
          Bring your modern data stack to the Web3 era.
        </Typography>
        <div className={styles.buttonWrapper}>
          <Button>
            Get started
          </Button>
          <Button secondary>
            Join the community
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero