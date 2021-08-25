import * as React from 'react'
import * as styles from './section-terminal.module.scss'
import classNames from 'classnames'
import Typography from './typography'

const SectionTerminal = () => {
  return (
    <div className={styles.background}>
      <div className={classNames('container', styles.wrapper)}>
        <Typography variant="h2" className={styles.title}>
          Here could be a terminal
        </Typography>
        <div className={styles.mockTerminal}/>
      </div>
    </div>
  )
}

export default SectionTerminal