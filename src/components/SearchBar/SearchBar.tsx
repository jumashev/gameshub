import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setSearchBar } from '../../redux/actions/items'
import { TypeCartItems } from '../../types'
import styles from './SearchBar.module.scss'

type TypeModal = {
  games:TypeCartItems[]
  value:string
  onChangeValue:(event:React.ChangeEvent<HTMLInputElement>) => void;
  onClickModal:() => void;
}

export const SearchBar:React.FC<TypeModal> = ({onClickModal, onChangeValue, games}:TypeModal):JSX.Element => {  
  const dispatch = useDispatch()
  const search = useTypedSelector<string>(state => state.filterdGamesBar.searchBar)

  const setSearchItems = ():void => {
    if (search.length) {
      dispatch(setSearchBar(search))
    }
    dispatch(setSearchBar(''))
  }
  
  return (
    <div className={styles.form}>
      <input
        value={search}
        onChange={onChangeValue} 
        placeholder='Поиск...' 
        className={styles.form__search} 
        type="text" 
      />
        {games.length ? <div className={search.length ? styles.form__inner : ''}>
          {search.length ? games.map(item => (
            <Link onClick={setSearchItems} to={`details/${item.id}`} className={styles['form__inner-item']} key={item.id}>
             <img width={70} src={item.images} alt="" />
              <span className={styles['form__inner-title']}>{item.name}</span>
              <div className={styles['form__inner-block']}>
                от
                <span className={styles['form__inner-price']}>{item.price}р</span>
              </div>
            </Link>
          )) : 
          null
        }
        </div> : 
        <div className={styles.form__inner}>
          <div style={{padding:'10px'}}>
            <span className={styles['form__inner-result']}>Ничего не найдено, попробуйте другие ключевые слова.</span>
          </div>
        </div>
        }
      <button onClick={onClickModal} className={styles.form__btn}>Подписаться</button>
    </div>
  )
}