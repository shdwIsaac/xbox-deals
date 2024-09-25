/* eslint-disable complexity */
import { type BreakpointType } from './types'
import { INITIAL_BREAKPOINTS } from './constants'
import { appBreakpoints } from './breakpoints'
import { checkMobileUseNavigator } from './checkMobileUseNavigator'

const { screenF, screenM } = appBreakpoints

export const getDeviceConfig = (screenWidth: number, navigator: Navigator): BreakpointType => {
  const isMobile = checkMobileUseNavigator(navigator)

  const isMobileScreen = screenWidth <= screenF.maxWidth
  const isDesktopScreen = screenWidth >= screenM.minWidth

  if (screenWidth < screenF.minWidth) {
    return {
      ...INITIAL_BREAKPOINTS,
      isScreenS: true,
      isMobileScreen,
      isMobile,
      width: screenWidth
    }
  }

  if (screenWidth >= screenF.minWidth && screenWidth <= screenF.maxWidth) {
    return {
      ...INITIAL_BREAKPOINTS,
      isScreenF: true,
      isMobileScreen,
      isMobile,
      width: screenWidth
    }
  }

  if (screenWidth >= screenM.minWidth && screenWidth <= screenM.maxWidth) {
    return {
      ...INITIAL_BREAKPOINTS,
      isScreenM: true,
      isDesktopScreen,
      isMobile,
      width: screenWidth
    }
  }

  return { ...INITIAL_BREAKPOINTS, isScreenL: true, isDesktopScreen, width: screenWidth }
}
