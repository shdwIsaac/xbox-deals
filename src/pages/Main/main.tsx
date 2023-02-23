import React, { type FC } from 'react'
import { Filter } from '../../components/Filter/filter'
import { Deals } from '../../components/Deals/deals'
import styles from './main.module.css'
import { Rules } from '../../components/Rules/rules'

export const Main: FC = () => {
  return (
    <div className={styles.column}>
      <Rules/>
      <div className={styles.main}>
        <Filter/>
        <Deals/>
      </div>
    </div>
  )
}
