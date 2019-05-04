export const getNavigationTiming = () => {

  // experimental API, IE is not supported
  const navigationPf = window.performance.getEntriesByType('navigation')
  if (navigationPf.length) {
    return navigationPf[0]
    // if not supported, use timing api.
  } else return window.performance.timing
}
