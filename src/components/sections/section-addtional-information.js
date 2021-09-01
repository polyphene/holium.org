import * as React from 'react'
import * as styles from './section-additional-information.module.scss'
import * as cardStyles from '../card.module.scss'
import Typography from '../typography'
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
          <PurpleSphere top={'440px'} left={'calc(50% - 280px)'}/>
          <BlueSphere top={'760px'} left={'calc(50% + 460px)'} size={190}/>
        </>
      }
    >
      <div className={classNames('container', styles.wrapper)}>
        <Typography variant="h2">
          Here is what we do at Polyphene
        </Typography>
        <Typography variant="body3" className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus,
          habitant nullam est hendrerit sollicitudin viverra. Ultricies cursus
          turpis morbi a aliquam eu, auctor magnis massa. Orci cursus purus
          morbi faucibus morbi at. Nisl turpis aliquet mauris, amet. Vel
          faucibus fringilla risus elementum arcu elit.
        </Typography>
        <div className={styles.body}>
          <div className={styles.cardsWrapper}>
            <Card title={'Big title'} image={
              <StaticImage src={'https://picsum.photos/1000/800'}
                           alt={'placeholder'}
                           className={cardStyles.image}
              />
            }>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              nisl egestas sit odio auctor sed ornare ac sem non est duis elit
              ac.
            </Card>
            <Card title={'Big title'} image={
              <StaticImage src={'https://picsum.photos/800/1000'}
                           alt={'placeholder'}
                           className={cardStyles.image}
              />
            }>
              Pretium nisl egestas sit odio auctor sed ornare ac sem non est
              duis
              elit ac.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              nisl egestas sit odio auctor sed ornare ac sem non est duis elit
              ac.
            </Card>
          </div>
        </div>
      </div>
    </FloatingSpheresLayout>
  )
}

export default SectionAdditionalInformation