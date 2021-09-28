import * as React from 'react'
import * as styles from './section-community-links.module.scss'
import classNames from 'classnames'
import IconCard from '../icon-card'
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
            <IconCard icon={<i className={'ci-home_alt_fill'}/>}
                      description={'Learn more about Holium by checking the documentation!'}
                      linkText={'Read'} linkRef={'/'}
            />
            <IconCard icon={<i className={'ci-discord'}/>}
                      description={'Join us on Discord and ask questions!'}
                      linkText={'Chat'} linkRef={'/'}
            />
            <IconCard icon={<i className={'ci-github'}/>}
                      description={'Open issues, PRs, request features and vote on them on Github!'}
                      linkText={'Contribute'} linkRef={'/'}
            />
          </div>
        </div>
      </div>
    </WavyWhiteLayout>
  )
}

export default SectionCommunityLinks