import React, { type FC } from 'react'
import styles from './filter.module.css'

export const Filter: FC = () => {
  return (
    <div>
      <h3>Название</h3>
      <input type="search" className={styles.search} placeholder='Поиск'/>
      <h3>Стоимость</h3>
      <div >
        <input className={styles.price} type="number" id="fromPrice" placeholder='От'/>
        <span> - </span>
        <input className={styles.price} type="number" id="toPrice" placeholder='До'/>
      </div>
     {/*  <div>
        <input type="checkbox" id="topGame" name="isTopGame"/>
        <label htmlFor="topGame">IsTopGame</label>
      </div> */}
    </div>
  )
}
