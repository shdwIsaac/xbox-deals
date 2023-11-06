import React, { type FC } from 'react'
import { Button, ModalBody, ModalFooter } from '@nextui-org/react'

interface IDeal {
  logo: string
  name: string
  isGold: boolean
  id: string
  minPrice: number
  country: string
}

interface GameInfoProps {
  onClose: () => void
  product: IDeal
}

export const GameInfo: FC<GameInfoProps> = ({ onClose, product }) => {
  return (
    <>
      <ModalBody>
        <img src={product.logo} alt={product.name}/>
        <h3>{product.name}</h3>
        <span>{product.minPrice} RUB</span>
      </ModalBody>
      <ModalFooter>
          <Button color="primary" onPress={onClose} variant="flat">ЗАКРЫТЬ</Button>
      </ModalFooter>
    </>
  )
}
