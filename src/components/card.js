import * as React from 'react'
import * as styles from './card.module.scss'
import Typography from './typography'
import Button from './button'

const Card = ({ title, image, children, linkText, linkRef, ...other }) => {
  return (
    <div className={styles.card} {...other}>
      {title ?
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        : ''}
      {image}
      <Typography variant="body3" className={styles.description}>
        {children}
      </Typography>
      {linkText && linkRef ?
        <Button className={styles.button}>
          {linkText}
        </Button>
        : ''}
    </div>
  )
}

export default Card