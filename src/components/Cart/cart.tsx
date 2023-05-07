import React, { type FC } from 'react'
import styles from './cart.module.css'
import { type CartItemType } from './types'

interface CartItems {
  items: CartItemType[]
  onRemoveItem: (item: CartItemType) => void
  onClearCart: () => void
}

export const Cart: FC<CartItems> = ({ items, onRemoveItem, onClearCart }) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className={styles.cartContainer}>
      <h2>Корзина</h2>
      <div>
        {items?.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div>{item.title}</div>
            <div>
              <button className={styles.cartButton} onClick={() => { onRemoveItem(item) }}>Удалить</button>
              <span>Количество: {item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <div>
          <div>Общее количество товаров: {totalItems}</div>
          <div>Итоговая сумма: {totalPrice} рублей</div>
          <button className={styles.cartButton} onClick={() => { onClearCart() }}>Очистить корзину</button>
        </div>
      )}
    </div>
  )
}
