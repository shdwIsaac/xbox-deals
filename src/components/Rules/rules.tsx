import React, { type FC } from 'react'
import styles from './rules.module.css'

export const Rules: FC = () => {
  return (
    <div className={styles.rules}>
      <span>Правила оформления заказа:</span>
      <ul>
        <li>
          <span>
            минимальная стоимость заказа 800 руб
          </span>
        </li>
        <li>
          <span>
            оформить заказ вы можете, написав в личные сообщения сообщества вк <button className={styles.button}>Believerville</button>
          </span>
        </li>
      </ul>
    </div>
  )
}
