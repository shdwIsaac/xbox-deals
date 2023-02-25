import React, { type FC, useEffect, useState } from 'react'
import { getDeals, type IDeal } from '../../utils/api'
import { Deal } from '../Deal/deal'
import { Select } from 'antd'
import styles from './deals.module.css'

export const Deals: FC = () => {
  const [state, setState] = useState<IDeal[]>([])

  const count: number = state.length

  useEffect(() => {
    const get = async (): Promise<void> => {
      setState(await getDeals())
    }
    void get()
  }, [])

  return (
    <div>
      <h1 className={styles.headerText}>Каталог игр</h1>
      <div className={styles.subHeader}>
        <span>Найдено {count} товаров</span>
        <div className={styles.sort}>
          <span>Сортировать</span>
          <Select className={styles.sortInput} options={[
            {
              value: 'name',
              label: 'По имени'
            },
            {
              value: 'price',
              label: 'По цене'
            }
          ]} defaultValue="name" size='large'/>
        </div>
      </div>
      <ul className={styles.list}>
        {state.map(deal => {
          return <Deal key={deal.gameId} logo={deal.logoPicture} name={deal.gameName} isGold={deal.isNeedGold}/>
        })}
      </ul>
    </div>
  )
}
