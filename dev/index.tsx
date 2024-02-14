import { render } from 'solid-js/web'
import './styles.css'

import App from './App'
import { Analytics } from '../src'

render(
  () => (
    <>
      <Analytics hostUrl="https://umami.gurkz.me" websiteId="3857c2e9-4fae-4205-aa80-f7a7ff32d6fc">
        <App />
      </Analytics>
    </>
  ),
  document.getElementById('root')!,
)
