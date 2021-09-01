import * as React from 'react'
import * as styles from './button.module.scss'
import classNames from 'classnames'
import Typography from './typography'

const Button = ({ secondary = false, className, children, ...other }) => {
  return (
    <button className={classNames(className, styles.button, secondary
      ? styles.secondaryButton
      : styles.primaryButton)} {...other}>
      <Typography className={styles.text} variant="button">
        {children}
      </Typography>
    </button>
  )
}

export default Button