import React, { type FC, useState } from 'react'
import { Catalog } from '../../components/Catalog/catalog'
import styles from './main.module.css'
import { Filter } from '../../components/Filter/filter'
import { useForm } from '../../hooks/use-form'
import { FilterContext } from '../../services/filterContext'
import { DealsContext } from '../../services/dealsContext'
import { type IGame } from '../../utils/api'

export const Main: FC = () => {
  const [products, setProducts] = useState<IGame[]>([])
  const { values, handleChange } = useForm({ name: '', lowPrice: '', highPrice: '' })
  const count: number = products.length

  return (
    <>
      <DealsContext.Provider value={{
        products,
        setProducts
      }}>
        <FilterContext.Provider value={{
          values,
          handleChange
        }}>
          <h2 className={styles.headerText}>Каталог игр</h2>
          <div className={styles.subHeader}>
            <span>Найдено {count} товаров</span>
            <div className={styles.main}>
              <Catalog/>
              <Filter/>
            </div>
          </div>
        </FilterContext.Provider>
      </DealsContext.Provider>
    </>
  )
}
