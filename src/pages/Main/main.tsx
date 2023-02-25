import React, { type FC } from 'react'
import { Deals } from '../../components/Deals/deals'
import styles from './main.module.css'
import { Filter } from '../../components/Filter/filter'

export const Main: FC = () => {
  return (
    <div className={styles.column}>
      <div className={styles.main}>
        <Deals/>
        <Filter/>
      </div>
    </div>
  )
}
