import * as React from 'react'
import * as styles from './hero.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import Button from '../button'
import FloatingSpheresWrapper, {
  BlueSphere, Cloud, LightBlueSphere, PinkSphere,
} from '../layouts/floating-spheres-layout'

const Hero = () => {
  return (
    <FloatingSpheresWrapper
      animatedObjects={
        <>
          <BlueSphere top={'10px'} left={'calc(50% + 120px)'} size={40}/>
          <LightBlueSphere top={'60px'} left={'80%'} size={80}/>
          <PinkSphere top={'360px'} left={'4%'} size={300}/>
          <Cloud top={'320px'} left={'75%'} size={240} zIndex={2}/>
        </>
      }
    >
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.mainBox}>
          <Typography variant="h1" className={styles.textGradient}>
            Freely transform data.
          </Typography>
          <Typography variant="body2" className={styles.subTitle}>
            Bring your modern data stack to the Web3 era.
          </Typography>
          <div className={styles.buttonWrapper}>
            <Button to={'#'}>
              Get started
            </Button>
            <Button to={'https://discord.gg/A3t5ZFSbCG'} secondary>
              Join the community
            </Button>
          </div>
        </div>
      </div>
    </FloatingSpheresWrapper>
  )
}

export default Hero