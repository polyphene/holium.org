import * as React from 'react'
import * as styles from './icon-card.module.scss'
import Typography from './typography'
import { Link } from 'gatsby'

const IconCard = ({ icon, description, linkText, linkRef }) => {
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
      {linkText && linkRef ?
        <Link to={linkRef}>
          <Typography variant="h3" className={styles.link}>
            {`${linkText}  ›`}
          </Typography>
        </Link>
        : ''}
    </div>
  )
}

export default IconCard