import React, {PropsWithChildren} from 'react'
import styles from './index.module.css'
import { BackDropPropType } from '../../lib/definitions'

export default function BackDrop({children, closeModal}: BackDropPropType) {
  return (
    <div className={styles.backDrop}>
      {children}
      <button onClick={() => closeModal()} className={styles.backDropClose}>
        <span>+</span>
      </button>
    </div>
  )
}