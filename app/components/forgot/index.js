import React from 'react'
import styles from './index.module.css'

export default function Forgot({title}) {
  return (
    <p className={styles.forgotStyles}>
      <span>Forgot Password?</span>
      <span>{title}</span>
    </p>
  )
}