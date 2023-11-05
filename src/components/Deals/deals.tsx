import React, { type FC, useContext } from 'react'
import { type IGame } from '../../utils/api'
import { Deal } from '../Deal/deal'
import { Select } from 'antd'
import styles from './deals.module.css'
import { DealsContext } from '../../services/dealsContext'
// import { FilterContext } from '../../services/filterContext'
import { Tab, Tabs } from '@nextui-org/react'

export const Deals: FC = () => {
  const {
    deals
    // setDeals
  } = useContext(DealsContext)
  // const { values } = useContext(FilterContext)
  const count: number = deals.length
  const items = [
    {
      key: 'deals',
      label: 'Предложения'
    },
    {
      key: 'soon',
      label: 'Скоро выходят'
    }
  ]

  /* let currentKey: string = 'deals'

  const onChange = (key: string): void => {
    currentKey = key
    void getGames(key)
  } */
  /* const getGames = async (key: string): Promise<void> => {
    switch (key) {
      case 'deals': {
        setDeals(await getDeals(values))
        break
      }
      case 'soon': {
        setDeals(await getComingSoons(values))
        break
      }
    }
  } */

  /* useEffect(() => {
    void getGames(currentKey)
  }, [values]) */

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
      <div className="flex w-full flex-col">
        <Tabs size="lg" variant="bordered">
          {items.map((item) => {
            return <Tab key={item.key} title={<div className="flex items-center space-x-2">
              <span>{item.label}</span>
            </div>}>
          </Tab>
          })}
        </Tabs>
      </div>
      <ul className={styles.list}>
        {deals.map((deal: IGame) => {
          return <Deal key={deal.gameId} logo={deal.logoPicture} name={deal.gameName} isGold={deal.isNeedGold}
                       id={deal.gameId} minPrice={deal.minPrice} country={deal.country}/>
        })}
      </ul>
    </div>
  )
}
