import React from 'react'
import { TypeGenresItems } from '../../types'

export const GenresItems:React.FC<TypeGenresItems> = ({id, title, checked, onClickGenres}) => {
  return (
    <div className='d-flex align-items-center'>
      <input 
        type='checkbox' 
        onChange={() => onClickGenres(title)}
      />
      <label className='ms-2'>{title}</label>
    </div>
  )
}