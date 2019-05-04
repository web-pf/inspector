import { createEventHandler } from './push-event'
import {getNavigationTiming} from './utils/get-navigation-timing'

export interface ICreateInspectorConfig {
  server: string
  appId: string
}
export const beaconApi = {
  performanceTiming: '/beacon/performance_timing',
}
export default function createInspector(inspectorConfig: ICreateInspectorConfig) {
  const { server, appId } = inspectorConfig

  const eventHandler = createEventHandler(server, appId)

  // const nativeControlError = console.error

  // window.console.error = (message?: any, optionalParams?: any[]) => {
  //   nativeControlError(message, optionalParams)
  //   eventHandler.push('/api/v1/beacon/wpf_console_err', message)
  // }

  // window.onerror = (message: any) => {
  //   eventHandler.push('/api/v1/beacon/wpf_window_err', message)
  // }

  window.onload = () => {
    eventHandler.push(beaconApi.performanceTiming, getNavigationTiming())
  }
}
