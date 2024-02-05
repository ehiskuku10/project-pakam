import React from 'react'
import {TextInputType} from '../../lib/definitions'
import styles from './index.module.css'

export default function TextInput({ type, name, placeholder, handleBlurEvent }: TextInputType) {
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