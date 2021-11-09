import * as React from 'react'
import * as styles from './section-additional-information.module.scss'
import * as cardStyles from '../card.module.scss'
import classNames from 'classnames'
import Card from '../card'
import { StaticImage } from 'gatsby-plugin-image'
import FloatingSpheresLayout, {
  BlueSphere,
  PurpleSphere,
} from '../layouts/floating-spheres-layout'

const SectionAdditionalInformation = () => {
  return (
    <FloatingSpheresLayout
      animatedObjects={
        <>
          <BlueSphere top={'140px'} left={'calc(50% - 280px)'}/>
          <PurpleSphere top={'360px'} left={'calc(50% + 440px)'} size={190}/>
        </>
      }
    >
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.body}>
          <div className={styles.cardsWrapper}>
            <Card title={'Check our tutorials'} image={
              <StaticImage src={'../../images/tutorial.svg'}
                           alt={'tutorial'}
                           objectFit={'contain'}
                           placeholder={'blurred'}
                           className={cardStyles.image}
              />
            }
                  linkText={'Get started'} linkRef={"#"}
            >
              Learn how to use the CLI to manipulate Holium data.
            </Card>
            <Card title={'Want to share a use case?'} image={
              <StaticImage src={'../../images/use-case.svg'}
                           alt={'use case'}
                           objectFit={'contain'}
                           placeholder={'blurred'}
                           className={cardStyles.image}
              />
            }
                  linkText={'Contribute'} linkRef={"https://github.com/polyphene"}
            >
              We are eager to collaborate and showcase exciting use cases!
            </Card>
          </div>
        </div>
      </div>
    </FloatingSpheresLayout>
  )
}

export default SectionAdditionalInformation