import * as React from 'react'
import * as baseStyles from './button.module.scss'
import classNames from 'classnames'

const Button = ({ secondary = false, children, ...other }) => {
  return (
    <button className={classNames(baseStyles.button, secondary
      ? baseStyles.secondaryButton
      : baseStyles.primaryButton)} {...other}>
      <span>
      {children}
      </span>
    </button>
  )
}

export default Button