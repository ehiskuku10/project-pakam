import React from 'react'
import styles from './index.module.css'

export default function TextInput({ type, name, placeholder, handleBlurEvent }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete='new-password'
        className={styles.inputStyles}
        onBlur={handleBlurEvent}
      />
    </>
  )
}