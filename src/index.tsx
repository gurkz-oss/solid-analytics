import { ParentComponent, onMount } from 'solid-js'
import { AnalyticsProvider, useAnalytics } from './context'

const Analytics: ParentComponent<{
  hostUrl: string
  websiteId: string
}> = props => {
  onMount(() => {
    if (!window.umami) {
      const head = document.head
      const script = document.createElement('script')
      script.dataset.websiteId = props.websiteId
      script.src = `${props.hostUrl}/script.js`
      script.async = true

      head.appendChild(script)
    }
  })

  return (
    <>
      <script async src={`${props.hostUrl}/script.js`} data-website-id={props.websiteId} />
      <AnalyticsProvider hostUrl={`${props.hostUrl}`} websiteId={`${props.websiteId}`}>
        {props.children}
      </AnalyticsProvider>
    </>
  )
}

export { Analytics, useAnalytics }
