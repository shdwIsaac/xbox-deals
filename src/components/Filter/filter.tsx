import React, { type FC } from 'react'
import styles from './filter.module.css'
import { Button, Input, InputNumber } from 'antd'

export const Filter: FC = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterContent}>
        <span>Название</span>
        <Input.Search className={styles.search} placeholder='Поиск' size='large'/>
      </div>
      <div className={styles.filterContent}>
        <span>Стоимость</span>
        <div >
          <InputNumber className={styles.price} placeholder='От' size='large'/>
          <span> — </span>
          <InputNumber className={styles.price} placeholder='До' size='large'/>
        </div>
      </div>
      <Button className={styles.submitFilter}>Применить фильтры</Button>
    </div>
  )
}
