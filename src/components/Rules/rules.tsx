import React, { type FC } from 'react'
// import { Button, ModalBody, ModalFooter } from '@nextui-org/react'

interface RulesProps {
  onClose: () => void
}

export const Rules: FC<RulesProps> = ({ onClose }) => {
  return (
    <>
      {/* <ModalBody>
        <p>
          Оформить заказ вы можете, написав в личные сообщения
        </p>
      </ModalBody>
      <ModalFooter>
        <a href='https://vk.com/DOG1R'>
          <Button color="success" onPress={onClose} variant="flat">
              ОФОРМИТЬ ЗАКАЗ
          </Button>
        </a>
      </ModalFooter> */}
      </>
  )
}
