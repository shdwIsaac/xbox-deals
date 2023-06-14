import React, { type FC, useEffect, useState } from 'react'
import Logo from '../../images/logo.png'
import VKLogo from '../../images/vk_logo.png'
import styles from './header.module.css'
import { Button } from 'antd'
import { Rules } from '../Rules/rules'

export const Header: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(window.innerWidth)

  function handleWindowSizeChange (): void {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile: boolean = width <= 1200

  return (
    <>
      <header className={styles.header}>
        <nav>
          <img src={Logo} alt="believerville" className={styles.logo}/>
        </nav>
        <div className={styles.info}>
          {!isMobile && <Button size="large" className={styles.howOrder} onClick={(): void => {
            setIsShown(!isShown)
          }}>Как заказать</Button>}
          <nav>
            {!isMobile && <a href="https://vk.com/believerville"><img src={VKLogo} alt="vk" className={styles.vkLogo}/></a>}
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
