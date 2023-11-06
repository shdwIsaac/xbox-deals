import React, { type FC } from 'react'
import { Card, CardFooter, Image, Button, Modal, useDisclosure, ModalContent } from '@nextui-org/react'
import { GameInfo } from '../GameInfo/game-info'

interface IProduct {
  logo: string
  name: string
  isGold: boolean
  id: string
  minPrice: number
  country: string
}

export const GameCard: FC<IProduct> = (product) => {
  const {
    isOpen,
    onOpen,
    onClose,
    onOpenChange
  } = useDisclosure()

  return (
    <>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image alt={product.name} className="object-cover" height={248} src={product.logo} width={180}/>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{product.minPrice} Р</p>
          <Button onPress={onOpen} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Посмотреть
          </Button>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          <GameInfo onClose={onClose} product={product}/>
        </ModalContent>
      </Modal>
    </>
  )
}
