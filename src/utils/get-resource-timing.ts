export const getResourceTiming = () => {
  return performance.getEntriesByType('resource').filter(item => {
    if (item.name.includes('monitor_ignore=true')) {
      return false
    }

    return true
  })
}
