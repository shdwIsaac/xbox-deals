import React, { type FC, useState } from 'react'
import styles from './deal.module.css'
import gold from '../../images/gold.svg'
import { Modal } from 'antd'

interface IDeal {
  logo: string
  name: string
  isGold: boolean
}

export const Deal: FC<IDeal> = ({
  logo,
  name,
  isGold
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const showModal = (): void => {
    setIsModalOpen(true)
  }
  const handleOk = (): void => {
    setIsModalOpen(false)
  }
  const handleCancel = (): void => {
    setIsModalOpen(false)
  }
  return (
    <>
      <li onClick={showModal} className={styles.listItem}>
        <img src={logo} alt={name} className={styles.image}/>
        <span className={styles.text}>{name}</span>
        {isGold && <img src={gold} alt="gold" className={styles.gold}/>}
      </li>
      <Modal title="Basic Modal" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
