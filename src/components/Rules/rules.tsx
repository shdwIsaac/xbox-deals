import React, { type FC } from 'react'
import styles from './rules.module.css'

export const Rules: FC = () => {
  return (
    <div className={styles.rules}>
      <span className={styles.text}>  Оформить заказ вы можете, написав в личные сообщения </span>
      <a href='https://vk.com/DOG1R'>
        <button className={styles.button}>ОФОРМИТЬ ЗАКАЗ</button>
      </a>
    </div>
  )
}
