type UmamiEventData = {
  [key: string]: string | number | Date
}

type TrackerOpts = {
  event: object | string
  eventData?: UmamiEventData
}
type TrackerFunc = (event: TrackerOpts['event'], eventData?: TrackerOpts['eventData']) => void

type Umami = {
  track: TrackerFunc
}

export type { Umami, TrackerFunc, TrackerOpts }
