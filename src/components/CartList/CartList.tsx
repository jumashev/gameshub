import React from 'react'
import { TypeCart } from '../../types'
import { CartItems } from '../CartItems/CartItems'

export const CartList:React.FC<TypeCart> = ({games}) => {
  return (
    <div className='games d-flex flex-wrap w-100 mb-3'>
      {games.map((item) => (
        <CartItems key={item.id} {...item}/>
      ))}
    </div>
  )
}