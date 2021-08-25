import * as React from 'react'
import * as styles from './section-why-holium.module.scss'
import classNames from 'classnames'
import Typography from './typography'
import IconCard from './icon-card'

const SectionWhyHolium = () => {
  return (
    <div className={styles.background}>
      <div className={classNames('container', styles.wrapper)}>
        <Typography variant="h2">
          Here is why Holium fit any data project you build
        </Typography>
        <div className={styles.body}>
          <div className={styles.cardsWrapper}>
            <IconCard icon={<i className={"ci-calendar_event"}/>} description={'Here is what we do at Polyphene'}/>
            <IconCard icon={<i className={"ci-data"}/>} description={'Here is what we do at Polyphene'}/>
            <IconCard icon={<i className={"ci-file_find"}/>} description={'Here is what we do at Polyphene'}/>
            <IconCard icon={<i className={"ci-group"}/>} description={'Here is what we do at Polyphene'}/>
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
    </div>
  )
}

export default SectionWhyHolium