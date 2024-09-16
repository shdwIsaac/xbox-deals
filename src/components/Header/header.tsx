import React, { type FC } from 'react'
import Logo from '../../images/new_logo.jpeg'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure
} from '@nextui-org/react'
// import { Rules } from '../Rules/rules'
import styles from './header.module.css'

export const Header: FC = () => {
  const {
    isOpen,
    onOpen,
    onClose,
    onOpenChange
  } = useDisclosure()

  return (
    <div className={styles.wwrappHeader}>
    <div className={styles.wrappHeader}>
      <Navbar shouldHideOnScroll>
        <NavbarContent justify="start">
          <NavbarBrand>
            <img src={Logo} alt="believerville" className={styles.logo} />
            <p className="font-bold text-inherit">BELIEVERVILLE</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button onPress={onOpen} color="success" variant="flat">Как заказать</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>
            Как сделать заказ
          </ModalHeader>
          <ModalBody>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    </div>
  )
}
