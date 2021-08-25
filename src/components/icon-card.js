import * as React from 'react'
import * as styles from './icon-card.module.scss'
import Typography from './typography'

const IconCard = ({ icon, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconBox}>
        {icon}
      </div>
      {description ?
        <Typography variant="h3" className={styles.description}>
          {description}
        </Typography>
        : ''}
    </div>
  )
}

export default IconCard