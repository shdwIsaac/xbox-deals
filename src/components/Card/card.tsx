import React, { type FC } from 'react'
import { Card, CardFooter, Image, Button } from '@nextui-org/react'

interface IProduct {
  logo: string
  name: string
  isGold: boolean
  id: string
  minPrice: number
  country: string
}

export const GameCard: FC<IProduct> = (proudct) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt={proudct.name}
        className="object-cover"
        height={200}
        src={proudct.logo}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{proudct.minPrice} Р</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Посмотреть
        </Button>
      </CardFooter>
    </Card>
  )
}
