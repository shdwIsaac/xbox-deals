import React, { type FC } from 'react'
import Logo from '../../images/new_logo.jpeg'

import {
  Button,
  Modal,
  ModalContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure
} from '@nextui-org/react'
import { Rules } from '../Rules/rules'
import styles from './header.module.css'

export const Header: FC = () => {
  const {
    isOpen,
    onOpen,
    onClose,
    onOpenChange
  } = useDisclosure()

  return (
    <div>
      <Navbar shouldHideOnScroll>
        <NavbarContent justify="start">
          <NavbarBrand>
            <img src={Logo} alt="believerville" className={styles.logo}/>
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
          <Rules onClose={onClose}/>
        </ModalContent>
      </Modal>
    </div>
  )
}
