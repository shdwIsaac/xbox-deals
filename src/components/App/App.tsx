import React, { type FC } from 'react'
import './App.css'
import { Header } from '../Header/header'
import { Main } from '../../pages/Main/main'

// fonts
import './../../fonts/DelaGothicOne-Regular.ttf'
import './../../fonts/Montserrat-VariableFont_wght.ttf'

export const App: FC = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  )
}
