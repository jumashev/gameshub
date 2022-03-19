import React from 'react'
import styles from './SearchInput.module.scss'
import searchIcon from '../../assets/images/icons8-search.svg'

type TypeSearch = {
  value:string
  setValue: (event:any) => void
  onClickItemSearch: (name:string) => void
}

export const SearchInput:React.FC<TypeSearch> = ({value, setValue, onClickItemSearch}):JSX.Element => {
  return (
    <div className={styles.input__search}>
    <input
      value={value} 
      onChange={e => setValue(e.target.value)}
      placeholder='Какую игру вы ищете?(не менее 3х символов)' 
      className={styles['home__search-input']} 
      type="text" 
    />
    <div className={styles.search}>
      <img
        onClick={() => onClickItemSearch('')} 
        className={styles.search__icon} 
        width={20} 
        height={20} 
        src={searchIcon} 
        alt="" 
      />
    </div>
  </div>
  )
}