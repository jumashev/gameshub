import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchDetails } from '../../redux/actions/items'
import { TypeCartItems } from '../../types'
import styles from './Details.module.scss'

export const DetailsPage:React.FC = ():JSX.Element => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const games = useTypedSelector<TypeCartItems[]>(state => state.games.games)

  const details = games.filter((item:TypeCartItems) => {
    return Number(item.id) === Number(id)
  })

  React.useEffect(() => {
    dispatch(fetchDetails())
  }, [])

  return (
    <main className={styles.main}>
      <div className='container'>
        {details.map((item:any) => (
          <div key={item.id} className={styles.details}>
            <div className='d-flex align-items-center'>
              <Link className={styles.details__home} to='/'>Главная</Link>
              <span className={styles.details__home}>/</span>
              <span className={styles.details__home}>{item.name}</span>
            </div>
            <div className='d-flex justify-content-between mt-5'>
              <div className={styles.details__inner}>
                <div className='d-flex justify-content-between'>
                  <h2 className={styles.details__name}>{item.name}</h2>
                  <h5 className={styles.details__price}>Цена {item.price} Р</h5>
                </div>
                  <span className={styles.details__category}>Жанры: {item.category}</span>
                  <hr />
                  <span className={styles.details__category}>Рейтинг</span>
                  <div>
                    <img className='mt-3' src={item.images} alt="" />
                  </div>
              </div>
              <div className={styles.shop}>
                <h3 className={styles.shop__title}>Предложение магазинов</h3>
                <div className={styles.shop__item}>
                  <img 
                    width={165} 
                    
                    src="https://gameshub.su/storage/stores/ykISAS3kOm73dzjBnde5I7h4nS3Zp28eU8irg3iX.png" 
                    alt="" 
                  />
                  <h5 className={styles.shop__price}>{item.price} р</h5>
                  <button className={styles.shop__btn}>Перейти в магазин</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}