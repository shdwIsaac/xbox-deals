import React, { type FC, useContext } from 'react'
import styles from './filter.module.css'
import { Input } from 'antd'
import { FilterContext } from '../../services/filterContext'

export const Filter: FC = () => {
  const {
    values,
    handleChange
  } = useContext(FilterContext)

  return (
    <div className={styles.filter}>
      <div className={styles.filterContent}>
        <span>Название</span>
        <Input value={values.name} onChange={handleChange} name="name" className={styles.search} placeholder="Поиск"
               size="large"/>
      </div>
      <div className={styles.filterContent}>
        <span>Стоимость</span>
        <div>
          <Input type='number' value={values.lowPrice} onChange={handleChange} name="lowPrice" className={styles.price}
                       placeholder="От" size="large"/>
          <span> — </span>
          <Input type='number' value={values.highPrice} onChange={handleChange} name="highPrice" className={styles.price}
                       placeholder="До" size="large"/>
        </div>
      </div>
    </div>
  )
}
