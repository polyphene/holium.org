import * as React from 'react'
import * as styles from './section-slideshow.module.scss'
import Typography from './typography'
import classNames from 'classnames'
import IconCard from './icon-card'

const SectionSlideshow = () => {
  return (
    <div className={classNames('container', styles.wrapper)}>
      <Typography variant="h2" className={styles.title}>
        Here is what we do at Polyphene
      </Typography>
      <div className={styles.body}>
        <div className={styles.cardsWrapper}>
          <IconCard icon={<i className={'ci-discord'}/>}/>
          <IconCard icon={<i className={'ci-slack'}/>}/>
          <IconCard icon={<i className={'ci-github'}/>}/>
        </div>
        <Typography variant="body3" className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus,
          habitant nullam est hendrerit sollicitudin viverra. Ultricies cursus
          turpis morbi a aliquam eu, auctor magnis massa. Orci cursus purus
          morbi faucibus morbi at. Nisl turpis aliquet mauris, amet. Vel
          faucibus fringilla risus elementum arcu elit.
        </Typography>
      </div>
    </div>
  )
}

export default SectionSlideshow