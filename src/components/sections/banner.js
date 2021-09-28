import * as React from 'react'
import * as styles from './banner.module.scss'
import Typography from '../typography'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Typography variant="body3" className={styles.text}>
        🔔 Holium is currently under active development. Join us on Discord or subscribe to get the latest news! 🔔
      </Typography>
    </div>
  )
}

export default Banner