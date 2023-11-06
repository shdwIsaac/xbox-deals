import React, { type FC, useContext, useEffect } from 'react'
import { getComingSoons, getDeals, type IGame } from '../../utils/api'
// import { Product } from '../Product/product'
import styles from './deals.module.css'
import { DealsContext } from '../../services/dealsContext'
// import { FilterContext } from '../../services/filterContext'
import { FilterContext } from '../../services/filterContext'
import { CatalogTab } from '../CatalogTab/catalog-tab'
import { GameCard } from '../Card_v2/card'

export const Catalog: FC = () => {
  const {
    products,
    setProducts
  } = useContext(DealsContext)
  const { values } = useContext(FilterContext)
  const tabItems: ITabItems[] = [{
    key: 'deals',
    label: 'Предложения'
  }, {
    key: 'soon',
    label: 'Скоро выходят'
  }
  ]

  const currentKey: string = 'deals'

  const getGames = async (key: string): Promise<void> => {
    switch (key) {
      case 'deals': {
        setProducts(await getDeals(values))
        break
      }
      case 'soon': {
        setProducts(await getComingSoons(values))
        break
      }
    }
  }

  useEffect(() => {
    void getGames(currentKey)
  }, [values])

  return (
    <div>
      <CatalogTab tabs={tabItems}></CatalogTab>
      <ul className={styles.list}>
        {products.map((deal: IGame) => {
          return <GameCard key={deal.gameId} logo={deal.logoPicture} name={deal.gameName} isGold={deal.isNeedGold}
                          id={deal.gameId} minPrice={deal.minPrice} country={deal.country}/>
        })}
      </ul>
    </div>
  )
}
