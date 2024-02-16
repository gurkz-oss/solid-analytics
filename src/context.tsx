import { ParentComponent, createContext, useContext } from 'solid-js'
import { internal_track } from './umami'
import { Umami } from './types'

const AnalyticsContext = createContext<Umami>({
  track: (event, eventData) => internal_track(event, eventData),
})

const AnalyticsProvider: ParentComponent = props => {
  const umami: Umami = {
    track: (event, eventData) => internal_track(event, eventData),
  }

  return <AnalyticsContext.Provider value={umami}>{props.children}</AnalyticsContext.Provider>
}

function useAnalytics() {
  const context = useContext(AnalyticsContext)

  return context
}

export { AnalyticsProvider, useAnalytics }
