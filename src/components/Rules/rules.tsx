import React, { type FC } from 'react'
import styles from './rules.module.css'
import Arrow from '../../images/arrow.png'

export const Rules: FC = () => {
  return (
    <div className={styles.rules}>
      <span>Правила оформления заказа:</span>
      <ul className={styles.rulesList}>
        <li>
          <span>
            минимальная стоимость заказа 800 руб
            <img src={Arrow} className={styles.arrow} alt='arrow'/>
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
