// Example from https://beta.reactjs.org/learn

import React from 'react'
import styles from './stores.module.css'

function AppStore() {
  // const [count, setCount] = useState(0)

  // function handleClick() {
  //   setCount(count + 1)
  // }

  return (
    <div>
      <div className={styles.stores}>
        <a href='https://apps.apple.com/us/app/gatoling/id6470147151' target="_SEJ" rel="noreferrer">
          <img src="/images/app_store.png" className={styles.logo} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.shawwals.gatoling" target="_SEJ" rel="noreferrer">
          <img src="/images/google_play.png" className={styles.logo} />
        </a>
      </div>
      <div className={styles.footerNotes}>
        <small>*Android app still under review at the moment.</small>
      </div>
    </div>
  )
}

export default function MyApp() {
  return <AppStore />
}
