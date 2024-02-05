import React from 'react'
import styles from './index.module.css'

export default function Logo() {
  return (
    <div className={styles.logoContainerStyles}>
      <div className={styles.logoImageStyles}></div>
      <div className={styles.logoTextStyles}></div>
    </div>
  )
}