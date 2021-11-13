import * as React from 'react'
import * as styles from './frame.module.scss'

const Frame = ({ children, ...other }) => {
  return (
    <div className={styles.frame} {...other}>
        {children}
    </div>
  )
}

export default Frame