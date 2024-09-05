import React, { type FC } from 'react'
import {
  Card,
  CardFooter,
  Image,
  Button,
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react'

interface IProduct {
  logo: string
  name: string
  isGold: boolean
  id: string
  minPrice: number
  country: string
}
export const GameCard: FC<IProduct> = (product) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  return (
    <div className='ps-1 pe-1'>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt={product.name}
          className="object-cover"
          height={248}
          src={product.logo}
          width={180}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{product.minPrice} Р</p>
          <Button
            onPress={onOpen}
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Посмотреть
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {product.name}
          </ModalHeader>
          <ModalBody>
            <img src={product.logo} alt={product.name} />
            <span>{product.minPrice} RUB</span>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose} variant="flat">
              ЗАКРЫТЬ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
