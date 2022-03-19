import React from 'react'
import { TypeGenres } from '../../types'
import { GenresItems } from '../GenresItems/GenresItems'
import styles from './GenresList.module.scss'

export const GenresList:React.FC<TypeGenres> = ({genres, onClickGenres}) => {
  return (
    <div>
      <h5>Жанры</h5>
      <div>
        {genres.map((item, index) => (
          <GenresItems 
            key={`${item}_${index}`} 
            {...item}
            onClickGenres={onClickGenres}
          />
        ))}
        <button onClick={() => onClickGenres(null)} className={styles.genres__btn}>Сбросить</button>
      </div>
    </div>
  )
}