import React from 'react'
import styles from './SortByPopup.module.scss'

export type TypeSort = {
  name:string
  type:string | null
  order:string
}

type TypeSortItem = {
  popup:boolean
  setPopup:(popup:boolean) => void
  items:TypeSort[]
  activeSortType:string | null
  onSortClickType: (item:TypeSort) => void
}

export const SortByPopup:React.FC<TypeSortItem> = ({items, popup, setPopup, activeSortType, onSortClickType}):JSX.Element => {
  const changeHandler = ():void => {
    setPopup(!popup)
  }

  const findItems = items.find(item => {
    return item.type === activeSortType
  })

  const onSelectItem = (item:TypeSort):void => {
    if (onSortClickType) {
      onSortClickType(item)
    }
    setPopup(false)
  }

  return (
    <div className={styles.sort}>
      <span>Сортировать: </span>
      <button onClick={changeHandler} className={styles.sort__btn}>По {findItems?.name}</button>
      {popup && <div className={styles.sort__inner}>
        {items.map((item, index) => (
          <div key={`${item}_${index}`}>
            <span
              onClick={() => onSelectItem(item)} 
              className={activeSortType === item.type ? styles.sort__active : styles.sort__item}
              >{item.name}
            </span>
          </div>
        ))}
      </div>}
    </div>
  )
}