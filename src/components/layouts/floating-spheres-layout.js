import * as React from 'react'
import * as styles from './floating-spheres-layout.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const uuid = () => Math.random().toString().replace('0.', '')

export const BlueSphere = ({ top, left, size }) => (
  <StaticImage src={'../../images/sphere-blue.png'}
               alt={'floating decorative blue bubble'}
               width={250}
               placeholder={'none'}
               className={styles.animated}
               style={{
                 top,
                 left,
                 width: size,
                 height: size,
               }}
               key={uuid()}
  />
)

export const LightBlueSphere = ({ top, left, size }) => (
  <StaticImage src={'../../images/sphere-light-blue.png'}
               alt={'floating decorative light blue bubble'}
               width={250}
               placeholder={'none'}
               className={styles.animated}
               style={{
                 top,
                 left,
                 width: size,
                 height: size,
               }}
               key={uuid()}
  />
)

export const PinkSphere = ({ top, left, size }) => (
  <StaticImage src={'../../images/sphere-pink.png'}
               alt={'floating decorative pink bubble'}
               width={250}
               placeholder={'none'}
               className={styles.animated}
               style={{
                 top,
                 left,
                 width: size,
                 height: size,
               }}
               key={uuid()}
  />
)

export const PurpleSphere = ({ top, left, size }) => (
  <StaticImage src={'../../images/sphere-purple.png'}
               alt={'floating decorative purple bubble'}
               width={250}
               placeholder={'none'}
               className={styles.animated}
               style={{
                 top,
                 left,
                 width: size,
                 height: size,
               }}
               key={uuid()}
  />
)

const FloatingSpheresWrapper = ({ animatedObjects, children }) => {
  return (
    <div className={styles.fullwidthWrapper}>
      <div className={styles.relativeWrapper}>
        <>
          {animatedObjects}
        </>
      </div>
      {children}
    </div>
  )
}

export default FloatingSpheresWrapper