import { createEventHandler } from './push-event'
import { getNavigationTiming } from './utils/get-navigation-timing'
import { getResourceTiming } from './utils/get-resource-timing'

export interface ICreateInspectorConfig {
  server: string
  appId: string
}
export default function createInspector(inspectorConfig: ICreateInspectorConfig) {
  const { server, appId } = inspectorConfig

  const eventHandler = createEventHandler(server, appId)

  const nativeError = console.error
  console.error = (message, ...restOptions) => {
    nativeError(message, ...restOptions)
    eventHandler.push('error', {
      type: 'console_error',
      message,
    })
  }

  window.addEventListener('unhandledrejection', function(e) {
    const { message, stack } = e.reason
    eventHandler.push('error', {
      type: 'promise_error',
      message,
      stack,
    })
  })
  window.addEventListener(
    'error',
    event => {
      const { message, filename, lineno, colno, error } = event
      eventHandler.push('error', {
        type: 'window_error',
        message,
        filename,
        lineno,
        colno,
        stack: error.stack,
      })
    },
    true
  )

  window.onload = () => {
    eventHandler.push('nav_timing', getNavigationTiming())
    eventHandler.push('resource_timing', getResourceTiming())
  }
}
