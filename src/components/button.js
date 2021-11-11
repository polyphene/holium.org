import * as React from 'react'
import * as styles from './button.module.scss'
import classNames from 'classnames'
import Typography from './typography'
import { Link } from 'gatsby'

const Button = ({ to, secondary = false, className, children, ...other }) => {
  return (
    <button className={classNames(className, styles.button, secondary
      ? styles.secondaryButton
      : styles.primaryButton)} {...other}>
      <Link to={to}>
        <Typography className={styles.text} variant="button">
          {children}
        </Typography>
      </Link>
    </button>
  )
}

export default Button