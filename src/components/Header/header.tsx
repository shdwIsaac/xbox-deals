import React, { type FC, useState } from 'react'
import Logo from '../../images/logo.svg'
import VKLogo from '../../images/vk_logo.png'
import styles from './header.module.css'
import { Button } from 'antd'
import { Rules } from '../Rules/rules'

export const Header: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false)

  return (
    <>
      <header className={styles.header}>
        <nav>
          <img src={Logo} alt="believerville" className={styles.logo}/>
        </nav>
        <div className={styles.info}>
          <Button size="large" className={styles.howOrder} onClick={(): void => {
            setIsShown(!isShown)
          }}>Как заказать</Button>
          <nav>
            <a href="https://vk.com/believerville"><img src={VKLogo} alt="vk" className={styles.vkLogo}/></a>
          </nav>
          {isShown &&
            <div className={styles.rules}>
              <Rules/>
            </div>
          }
        </div>
      </header>

    </>
  )
}
