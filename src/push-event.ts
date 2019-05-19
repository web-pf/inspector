export function createEventHandler(server: string, appId: string) {
  return {
    push: (name: string, payload: object) => {
      const beaconData = new FormData()

      beaconData.append('appId', appId)
      beaconData.append('name', name)
      beaconData.append('record', JSON.stringify(payload))
      beaconData.append('timestamp', String(Date.now()))

      navigator.sendBeacon(server + '/beacon?monitor_ignore=true', beaconData)
    },
  }
}
