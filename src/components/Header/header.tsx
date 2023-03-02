import React, { type FC } from 'react'
import Logo from '../../images/logo.svg'
import VKLogo from '../../images/vk_logo.png'
import styles from './header.module.css'
/* import { Button } from 'antd' */

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <img src={Logo} alt='believerville' className={styles.logo}/>
      </nav>
      <div className={styles.info}>
        {/* <Button size='large' className={styles.howOrder}>Как заказать</Button> */}
        <nav>
          <a href='https://vk.com/believerville'><img src={VKLogo} alt='vk' className={styles.vkLogo} /></a>
        </nav>
      </div>
    </header>
  )
}
