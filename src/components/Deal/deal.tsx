import React, { type FC } from 'react'
import styles from './deal.module.css'
import gold from '../../images/gold.png'

interface IDeal {
  logo: string
  name: string
  price: number
  isGold: boolean
}

export const Deal: FC<IDeal> = ({
  logo,
  name,
  price,
  isGold
}) => {
  return (
    <li className={styles.listItem}>
      <img src={logo} alt={name} className={styles.image}/>
      <span className={styles.text}>{name}</span>
      <span>{price}</span>
      {isGold && <img src={gold} alt='gold' className={styles.gold} />}
    </li>
  )
}
