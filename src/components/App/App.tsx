import React, { type FC } from 'react'
import './App.css'
import { Header } from '../Header/header'
import { Main } from '../../pages/Main/main'

export const App: FC = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  )
}
