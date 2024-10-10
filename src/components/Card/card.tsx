/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/space-infix-ops */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, type FC } from 'react'
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
  Select,
  SelectItem
} from '@nextui-org/react'
import styles from './card.module.css'
import { useBreakpoint } from '../../breakpoints'
import { getDeal, type IGameDeals } from '../../utils/api'
interface IProduct {
  logo: string
  name: string
  isGold: boolean
  id: string
  minPrice: number
  country: string
}
export const GameCard: FC<IProduct> = (product) => {
  const { isScreenS } = useBreakpoint()

  const [gameDeals, setGameDeals] = useState<IGameDeals>()
  const [selectedCountry, setSelectedCountry] = useState<string>(product.country)
  console.debug({ selectedCountry })
  const processDeal = async (): Promise<void> => {
    getDeal(product.id).then(resp => { setGameDeals(resp) })
  }

  const onChangeSelect = (e: any): void => {
    console.debug('onChangeSelect', e.target.value)
    setSelectedCountry(e.target.value)
  }

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure({
    onOpen: processDeal
  })

  const priceSelectedCountry = selectedCountry ? gameDeals?.deals?.find(d => d.country === selectedCountry)?.priceRub : undefined
  return (
    <div className='ps-1 pe-1'>
      <Card isFooterBlurred radius="lg" className={`border-none ${styles.my_card_wrapp}`}>
        <Image
          alt={product.name}
          className={`object-cover ${styles.my_card}`}
          // className="object-cover"
          height={248}
          src={product.logo}
          width={isScreenS ? 166 : 180}
        />
        <CardFooter className={`justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ${styles.card_footer}`}>
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
        <ModalContent>
          <ModalHeader />
          <ModalBody>
            <img src={product.logo} alt={product.name} className={styles.img_modal} />
            <b>{product.name}</b>
            <div className='flex items-center pb-4'>
              <Select defaultSelectedKeys={[product.country]} onChange={onChangeSelect} selectedKeys={[selectedCountry]}>
              {/* @ts-ignore */}
              {gameDeals?.deals.map((element, index) => (<SelectItem key={element.country} value={element.country}>{element.country}</SelectItem>))}
              </Select>
              <span className={styles.price} >{priceSelectedCountry || product.minPrice} RUB</span>
            </div>

          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
