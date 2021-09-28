import * as React from 'react'
import * as styles from './banner.module.scss'
import Typography from '../typography'
import { Link } from 'gatsby'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Typography variant="body3" className={styles.text}>
        🔔 Holium is currently under active development. <Link to={'https://discord.gg/A3t5ZFSbCG'}>Join us on Discord</Link> to get the latest news! 🔔
      </Typography>
    </div>
  )
}

export default Banner