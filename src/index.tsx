import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App/App'
import { NextUIProvider } from '@nextui-org/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
