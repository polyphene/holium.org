import * as React from 'react'
import * as styles from './button.module.scss'
import classNames from 'classnames'

const Button = ({ secondary = false, children, ...other }) => {
  return (
    <button className={classNames(styles.button, secondary
      ? styles.secondaryButton
      : styles.primaryButton)} {...other}>
      <span>
      {children}
      </span>
    </button>
  )
}

export default Button