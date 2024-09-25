/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { type FC, useContext, useState } from 'react'
import { FilterContext } from '../../services/filterContext'
import { Input, Select, SelectItem, Button } from '@nextui-org/react'
import styles from './filter.module.css'
import { useBreakpoint } from '../../breakpoints'

export const Filter: FC = () => {
  const {
    values,
    handleChange
  } = useContext(FilterContext)

  const [hide, setHide] = useState(true)

  const { isMobileScreen } = useBreakpoint()
  const toogleHide = () => { setHide(prev => !prev) }
  const classNamesForFilter = `${styles.filter_content} ${hide ? styles.hide_filter : ''}`

  return (
    <div className={styles.filter}>
      {isMobileScreen && <Button onClick={toogleHide} className={styles.toogle}>Фильтры</Button>}
      <div className={classNamesForFilter}>
        <Input label="Название" value={values.name} onChange={handleChange} name="name" placeholder="Поиск" />

        <Input label="Стоимость от" type="number" value={values.lowPrice} onChange={handleChange} name="lowPrice" />
        <Input label="Стоимость до" type="number" value={values.highPrice} onChange={handleChange} name="highPrice" />

        <Select label="Сортировка" defaultSelectedKeys={['name']}>
          <SelectItem key="name">По имени</SelectItem>
        </Select>
      </div>
    </div>
  )
}
