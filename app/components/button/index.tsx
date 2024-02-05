import React from 'react'
import {ButtonType} from '../../lib/definitions'
import styles from './index.module.css'

export default function Button({ css, title, handleClick }: ButtonType) {
  return (
    <button
      className={styles.buttonStyles}
      style={css}
      onClick={() => handleClick()}
    >
      <span>{title}</span>
    </button>
  )
}