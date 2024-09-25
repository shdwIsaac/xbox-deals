import { useEffect, useState } from 'react'
import _ from 'lodash'

import { type BreakpointType } from '../types'
import { getDeviceConfig } from '../getDeviceConfig'

const subscriptions = new Set<(breakpoints: BreakpointType) => void>()

window.addEventListener(
  'resize',
  _.throttle(() => {
    const breakpoints = getDeviceConfig(window.innerWidth, navigator)

    subscriptions.forEach(fn => { fn(breakpoints) })
  }, 50)
)

function subscribe (fn: (breakpoints: BreakpointType) => void): void {
  subscriptions.add(fn)
}

function unsubscribe (fn: (breakpoints: BreakpointType) => void): void {
  subscriptions.delete(fn)
}

export const useBreakpoint = (): BreakpointType => {
  const [windowSize, setWindowSize] = useState<BreakpointType>(() => {
    return getDeviceConfig(window.innerWidth, navigator)
  })

  useEffect(() => {
    subscribe(setWindowSize)

    return () => { unsubscribe(setWindowSize) }
  }, [setWindowSize])

  return windowSize
}
