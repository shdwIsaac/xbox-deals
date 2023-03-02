import React, { type FC, useContext } from 'react'
import { type IGame } from '../../utils/api'
import { Deal } from '../Deal/deal'
import { Select } from 'antd'
import styles from './deals.module.css'
import { DealsContext } from '../../services/dealsContext'

export const Deals: FC = () => {
  const { deals } = useContext(DealsContext)
  const count: number = deals.length

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
            }
          ]} defaultValue="name" size="large"/>
        </div>
      </div>
      <ul className={styles.list}>
        {deals.map((deal: IGame) => {
          return <Deal key={deal.gameId} logo={deal.logoPicture} name={deal.gameName} isGold={deal.isNeedGold}
                       id={deal.gameId}/>
        })}
      </ul>
    </div>
  )
}
