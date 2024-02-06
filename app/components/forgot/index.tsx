import React from 'react'
import styles from './index.module.css'

export default function Forgot(text: any) {
  return (
    <p className={styles.forgotStyles}>
      <span>Forgot Password?</span>
      <span>{text}</span>
    </p>
  )
}