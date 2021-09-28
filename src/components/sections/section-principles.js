import * as React from 'react'
import * as styles from './section-principles.module.scss'
import * as cardStyles from '../card.module.scss'
import classNames from 'classnames'
import Card from '../card'
import { StaticImage } from 'gatsby-plugin-image'
import FloatingSpheresWrapper, {
  BlueSphere,
  LightBlueSphere,
  PurpleSphere,
} from '../layouts/floating-spheres-layout'

const SectionPrinciples = () => {
  return (
    <FloatingSpheresWrapper
      animatedObjects={
        <>
          <LightBlueSphere top={'140px'} left={'80%'} size={150} zIndex={2}/>
          <PurpleSphere top={'300px'} left={'10%'}/>
          <BlueSphere top={'520px'} left={'45%'} size={190}/>
        </>
      }
    >
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.cardsWrapper}>
          <Card title={'Transform'} image={
            <StaticImage src={'../../images/image-placeholder.svg'}
                         alt={'placeholder'}
                         placeholder={'blurred'}
                         className={cardStyles.image}
            />
          }>
            Transform structured, semi-structured and complex data.
          </Card>
          <Card title={'Collaborate'} image={
            <StaticImage src={'../../images/image-placeholder.svg'}
                         alt={'placeholder'}
                         placeholder={'blurred'}
                         className={cardStyles.image}
            />
          }>
            Collaborate on pipelines to infuse trust into your data.
          </Card>
          <Card title={'Integrate'} image={
            <StaticImage src={'../../images/image-placeholder.svg'}
                         alt={'placeholder'}
                         placeholder={'blurred'}
                         className={cardStyles.image}
            />
          }>
            Integrate into generic ETL and ELT flows.
          </Card>
          <Card title={'Relax'} image={
            <StaticImage src={'../../images/image-placeholder.svg'}
                         alt={'placeholder'}
                         placeholder={'blurred'}
                         className={cardStyles.image}
            />
          }>
            Relax, while Web3 runs under the hood.
          </Card>
        </div>
      </div>
    </FloatingSpheresWrapper>
  )
}

export default SectionPrinciples