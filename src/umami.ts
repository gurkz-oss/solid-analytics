import { isServer } from 'solid-js/web'
import { type TrackerOpts } from './types'

/**
 * @internal
 */
function internal_track(event: TrackerOpts['event'], eventData: TrackerOpts['eventData']) {
  if (!isServer) {
    window.umami?.track(event, eventData)
  }
}

export { internal_track }
