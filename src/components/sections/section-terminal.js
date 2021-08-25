import * as React from 'react'
import * as styles from './section-terminal.module.scss'
import classNames from 'classnames'
import Typography from '../typography'
import topSeparator from '../../images/separator-2.svg'
import bottomSeparator from '../../images/separator-3.svg'
import WavyWhiteLayout from '../layouts/wavy-white-layout'

const SectionTerminal = () => {
  return (
    <WavyWhiteLayout
      topSeparator={topSeparator}
      topSeparatorHeight={'12vw'}
      topMargin={'23vw'}
      bottomSeparator={bottomSeparator}
      bottomSeparatorHeight={'14vw'}
      bottomMargin={'10vw'}
    >
      <div className={classNames('container', styles.wrapper)}>
        <Typography variant="h2">
          Here could be a terminal
        </Typography>
        <div className={styles.mockTerminal}/>
      </div>
    </WavyWhiteLayout>
  )
}

export default SectionTerminal