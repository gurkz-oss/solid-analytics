import type { Component } from 'solid-js'
import logo from './logo.svg'
import styles from './App.module.css'
import { useAnalytics } from '../src'

const App: Component = () => {
  const { track } = useAnalytics()
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <button onClick={() => track('clicked')}>track</button>
      </header>
    </div>
  )
}

export default App
