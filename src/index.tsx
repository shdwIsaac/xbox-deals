import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App/App'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
)
