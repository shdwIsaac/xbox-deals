import React, { type FC, useContext } from 'react'
import { FilterContext } from '../../services/filterContext'
import { Input, Select, SelectItem } from '@nextui-org/react'
import styles from './filter.module.css'

export const Filter: FC = () => {
  const {
    values,
    handleChange
  } = useContext(FilterContext)

  return (
    <div className={styles.filter}>
      <Input label="Название" value={values.name} onChange={handleChange} name="name" placeholder="Поиск"/>

      <Input label="Стоимость от" type="number" value={values.lowPrice} onChange={handleChange} name="lowPrice"/>
      <Input label="Стоимость до" type="number" value={values.highPrice} onChange={handleChange} name="highPrice"/>

      <Select
        label="Сортировка"
        defaultSelectedKeys={['name']}>
        <SelectItem key="name">По имени</SelectItem>
      </Select>
    </div>
  )
}
