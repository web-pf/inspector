export function createEventHandler(server: string, appId: string) {
  return {
    push: (api: string, payload: object) => {
      const beaconData = new FormData()

      beaconData.append('appId', appId)
      beaconData.append('record', JSON.stringify(payload))

      navigator.sendBeacon(server + api, beaconData)
    },
  }
}
