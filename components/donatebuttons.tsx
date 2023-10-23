// Example from https://beta.reactjs.org/learn

import React from 'react'
import styles from './stores.module.css'

function DonateButton() {

  return (
    <div>
      <div className={styles.stores}>
        <a href='https://www.paypal.com/paypalme/shawwalmuhammad' target="_SEJ" rel="noreferrer">
          <img src="/images/pay-palme.png" className={styles.logo} />
        </a>
      </div>
    </div>
  )
}

export default function MyApp() {
  return <DonateButton />
}
