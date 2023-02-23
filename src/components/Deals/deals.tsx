import React, { type FC, useEffect, useState } from 'react'
import { getDeals, type IDeal } from '../../utils/api'
import { Deal } from '../Deal/deal'
import styles from './deals.module.css'

export const Deals: FC = () => {
  const [state, setState] = useState<IDeal[]>([])

  useEffect(() => {
    const get = async (): Promise<void> => {
      setState(await getDeals())
    }
    void get()
  }, [])

  return (
    <ul className={styles.list}>
      {state.map(deal => {
        return <Deal key={deal.id} logo={deal.logoPicture} name={deal.gameName} price={deal.prices[0].price}
                     isGold={deal.isNeedGold}/>
      })}
    </ul>
  )
}
