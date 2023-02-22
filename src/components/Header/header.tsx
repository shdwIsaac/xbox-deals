import React, { type FC } from 'react'
import Logo from '../../images/logo.svg'
import VKLogo from '../../images/vk_logo.png'
import styles from './header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <img src={Logo} alt='believerville' className={styles.logo}/>
      </nav>
      <nav>
        <img src={VKLogo} alt='vk' className={styles.vkLogo} />
      </nav>
    </header>
  )
}
