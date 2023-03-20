import * as React from 'react'
import * as styles from './section-community-links.module.scss'
import classNames from 'classnames'
import IconCard from '../misc/icon-card'
import WavyWhiteLayout from '../layouts/wavy-white-layout'
import topSeparator from '../../images/separator-0.svg'
import bottomSeparator from '../../images/separator-1.svg'

const SectionCommunityLinks = () => {
  return (
    <WavyWhiteLayout
      topSeparator={topSeparator}
      topSeparatorHeight={''}
      topMargin={'16vw'}
      bottomSeparator={bottomSeparator}
      bottomSeparatorHeight={''}
      bottomMargin={'16vw'}
    >
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.body}>
          <div className={styles.cardsWrapper}>
            <IconCard icon={<i className={'ci-bulb'}/>}
                      description={'Learn more about Holium by checking the documentation!'}
                      linkText={'Read'} linkRef={'https://polyphene.github.io/docs.holium.org/'}
            />
            <IconCard icon={<i className={'ci-discord'}/>}
                      description={'Join us on Discord and ask questions!'}
                      linkText={'Chat'} linkRef={'https://discord.gg/A3t5ZFSbCG'}
            />
            <IconCard icon={<i className={'ci-github'}/>}
                      description={'Open issues, PRs, request features and vote on them on Github!'}
                      linkText={'Contribute'} linkRef={'https://github.com/polyphene'}
            />
          </div>
        </div>
      </div>
    </WavyWhiteLayout>
  )
}

export default SectionCommunityLinks