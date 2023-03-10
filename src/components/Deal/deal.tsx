import React, { type FC, useState } from 'react'
import styles from './deal.module.css'
import gold from '../../images/gold.svg'
import { Modal, Select } from 'antd'
import { getDeal, type IGameDeals } from '../../utils/api'

const { Option } = Select

interface IDeal {
  logo: string
  name: string
  isGold: boolean
  id: string
}

export const Deal: FC<IDeal> = ({
  logo,
  name,
  isGold,
  id
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [gameDeals, setGameDeals] = useState<IGameDeals>()
  const [selectedCountry, setSelectedCountry] = useState<number>(0)

  const processDeal = async (): Promise<void> => {
    setGameDeals(await getDeal(id))
  }
  const showModal = (): void => {
    void processDeal()
    setIsModalOpen(true)
  }
  const handleCancel = (): void => {
    setIsModalOpen(false)
  }
  const onChangeSelect = (value: number): void => {
    setSelectedCountry(value)
  }

  return (
    <>
      <li onClick={showModal} className={styles.listItem}>
        <img src={logo} alt={name} className={styles.image}/>
        <span className={styles.text}>{name}</span>
        {isGold && <img src={gold} alt="gold" className={styles.gold}/>}
      </li>
      <Modal centered open={isModalOpen} onCancel={handleCancel} footer={[]}>
        <div className={styles.modal}>
          <img src={logo} alt={name} className={styles.image}/>
          <div>
            <h3 className={styles.text}>{name}</h3>
          </div>
        </div>
        <div className={styles.choosePrice}>
          <Select onChange={onChangeSelect} defaultValue={selectedCountry} className={styles.selectCountry}
                  size="middle">
            {gameDeals?.deals.map((element, index) => {
              return <Option key={index} value={index}>{element.country}</Option>
            })}
          </Select>
          <span>{gameDeals?.deals[selectedCountry].priceRub} RUB</span>
        </div>
      </Modal>
    </>
  )
}
