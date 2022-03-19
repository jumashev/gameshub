import React from 'react'
import { Link } from 'react-router-dom'
import { TypeCartItems } from '../../types'
import styles from './CartItems.module.scss'

export const CartItems:React.FC<TypeCartItems> = ({id, name, price, images}) => {
  return (
    <div className={styles.items}>
      <img width={250} height={113} src={images} alt="" />
      <div className={styles.items__info}>
        <Link style={{color:'#fff', textDecoration:'none'}} to={`details/${Number(id)}`}>
          <h5 className={styles['items__info-title']}>{name}</h5>
        </Link>
        <span className={styles['items__info-price']}>
          <div className={styles['items__info-ot']}>ОТ</div>{price} <div className='ms-1'>Р</div>
        </span>
      </div>
    </div>
  )
}