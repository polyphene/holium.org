import * as React from 'react'
import * as styles from './card.module.scss'
import Typography from './typography'

const Card = ({ title, image, children, ...other }) => {
  return (
    <div className={styles.card} {...other}>
      {title ?
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        : ''}
      {image}
      <Typography variant="body3">
        {children}
      </Typography>
    </div>
  )
}

export default Card