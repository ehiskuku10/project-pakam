import React from 'react'
import styles from './index.module.css'
import Link from 'next/link';

export default function Forgot({title, to}) {
  return (
    <p className={styles.forgotStyles}>
      <span>Forgot Password?</span>
      <Link href={to}><span>{title}</span></Link>
    </p>
  )
}