import React, { type FC, useEffect, useState } from 'react'
import { Deals } from '../../components/Deals/deals'
import styles from './main.module.css'
import { Filter } from '../../components/Filter/filter'
import { useForm } from '../../hooks/use-form'
import { FilterContext } from '../../services/filterContext'
import { DealsContext } from '../../services/dealsContext'
import { getDealsDb, type IGame } from '../../utils/api'

export const Main: FC = () => {
  const [deals, setDeals] = useState<IGame[]>([])

  const {
    values,
    handleChange
  } = useForm({
    name: '',
    lowPrice: '',
    highPrice: ''
  })

  const getDeals = async (): Promise<void> => {
    setDeals(await getDealsDb(values))
  }

  useEffect(() => {
    void getDeals()
  }, [values])

  return (
    <div className={styles.column}>
      <div className={styles.main}>
        <DealsContext.Provider value={{
          deals,
          setDeals
        }}>
          <FilterContext.Provider value={{
            values,
            handleChange
          }}>
            <Deals/>
            <Filter/>
          </FilterContext.Provider>
        </DealsContext.Provider>
      </div>
    </div>
  )
}
