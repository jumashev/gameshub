import React from 'react'
import styles from './Modal.module.scss'

type ModalClose = {
  onClose:() => void
}

export const Modal:React.FC<ModalClose> = ({onClose}) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__inner}>
        <div className='d-flex align-items-center justify-content-between'>
          <h3 className={styles.popup__title}>Оформить подписку</h3>
          <span onClick={onClose} className={styles.popup__close}>&times;</span>
        </div>
        <form>
          <input className={styles.popup__email} type="text" placeholder='Ваш Email' />
          <button className={styles.popup__btn}>Подписаться</button>
        </form>
      </div>
    </div>
  )
}