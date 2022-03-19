import React from 'react'
import { SwiperGames } from '../../components/Swiper/SwiperGames'
import styles from './HomePage.module.scss'
import { CartList } from '../../components/CartList/CartList'
import { GenresList } from '../../components/GenresList/GenresList'
import { fetchFilterdGames, fetchFilterdGamesBar, fetchGames, fetchGenres, setSearch } from '../../redux/actions/items'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setCategory } from '../../redux/actions/category'
import { SortByPopup, TypeSort } from '../../components/SortByPopup/SortByPopup'
import { setLimit, setSorting } from '../../redux/actions/sorting'
import { TypeCategory, TypeGames, Types } from '../../redux/types'
import { TypeCartItems, TypeGenresItems } from '../../types'
import { Loader } from '../../components/Loader/Loader'
import searchIcon from '../../assets/images/icons8-search.svg'
import { Link } from 'react-router-dom'
import { SliderRange } from '../../components/SliderRange/SliderRange'

const sortItems = [
  {type:null, name:'умолчанию', order:''},
  {type:'category', name:'популярности', order: 'desc'},
  {type:'price', name:'цене', order: 'desc' },
  {type:'name', name:'алфавиту', order: 'asc' }
]

type TypeSortItems = {
  type:string | null
  order:string
}

type TypeRangeItems = string | number

export const HomePage:React.FC = ():JSX.Element => {
  const dispatch = useDispatch()
  const games = useTypedSelector<TypeCartItems[]>(state => state.games.games)
  const genres = useTypedSelector<TypeGenresItems[]>(state => state.genres.genres)
  const category = useTypedSelector<TypeCategory>(state => state.category.category)
  const sorting = useTypedSelector<TypeSortItems>(state => state.sorting.sortBy)
  const loaded = useTypedSelector<boolean>(state => state.loaded.loaded)
  const limit = useTypedSelector<number>(state => state.sorting.limit)
  const range = useTypedSelector<TypeRangeItems>((state) => state.range.range)
  const filterdGames = useTypedSelector<TypeCartItems[]>((state) => state.filterdGames.filterdGames)
  const search = useTypedSelector<string>((state) => state.filterdGames.search)
  const searchBar = useTypedSelector<string>((state) => state.filterdGamesBar.searchBar)
  const [popup, setPopup] = React.useState<boolean>(false)

  const setRangeItems = (e:React.ChangeEvent<HTMLInputElement>):void => {
    dispatch({
      type:Types.APP_RANGE,
      payload:e.target.value
    })
  }

  const setSearchItems = (e:React.ChangeEvent<HTMLInputElement>):void => {
    dispatch(setSearch(e.target.value))
  }

  const setValueItems = ():void => {
    dispatch(setSearch(search))
  }

  const changeHandlerPopup = ():void => {
    setPopup(!popup)
  }

  const setSortingItems = (items:TypeSort):void => {
    dispatch(setSorting(items))
  }

  const setCategoryItems = (name:string | null):void => {
    dispatch(setCategory(name))
  }

  const setLimitItems = ():void => {
    dispatch(setLimit())
  }

  React.useEffect(() => {
    dispatch<string | number | TypeGames | any>(fetchGames(category, sorting, limit, range))
  }, [category, sorting, limit, range])

  React.useEffect(() => {
    dispatch(fetchGenres())
  }, [])

  React.useEffect(() => {
    dispatch(fetchFilterdGames(search))
  }, [search])

  React.useEffect(() => {
    dispatch(fetchFilterdGamesBar(searchBar))
  }, [searchBar])

  return (
    <>
      <div className={styles.home}>
        <div className="container">
          <ul className={'home__ul'}>
            <div>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Steampay</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Zaka-Zaka</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">ImperiumKey</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Steambuy</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">SteamRandomKeys</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Bobkeys.ru</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Keys Farm</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">baty131shop</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">keysteam</a></li>
            </div>
            <div>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Keys</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Steam Discount</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">SteamKeyStore</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">200plus</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">gamesforfarm</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Steambuy</a></li>
              <li className={'home__ul-list'}><a className={'home__ul-item'} href="#">Cheap Steam Games</a></li>
            </div>
          </ul>
          <div>
            <h2 className={styles.home__title}>БЕСПЛАТНЫЙ СЕРВИС ДЛЯ ПОКУПКИ STEAM-КЛЮЧЕЙ ПО САМОЙ ВЫГОДНОЙ ЦЕНЕ БЕЗ РЕГИСТРАЦИИ</h2>
            <h4 className={styles.home__subtitle}>Введите название игры и получите скидку до 95% на лицензионный цифровой ключ</h4>
            <div className={styles.home__search}>
              <input
                value={search} 
                onChange={setSearchItems}
                placeholder='Какую игру вы ищете?(не менее 3х символов)' 
                className={styles['home__search-input']} 
                type="text" 
              />
              <>
                <Link to={`${filterdGames.length ? filterdGames[0] ? `details/${filterdGames[0].id}` : '/' : ''}`} onClick={setValueItems} className={styles.search}>
                  <img className={styles.search__icon} width={20} height={20} src={searchIcon} alt="" />
                </Link>
              </>
            </div>
            {filterdGames.length ? <>
              {search.length ? <div className={styles.home__items}>
                {filterdGames.map((item) => (
                  <Link key={item.id} to={`/details/${item.id}`} className={styles.home__item}>
                    <div>
                      <img className={styles.home__image} width={87} src={item.images} alt="" />
                      <span className={styles.home__name}>{item.name}</span>
                    </div>
                    <p className={styles.home__price}><b style={{fontWeight:'300'}}>от</b> {item.price}р</p>
                  </Link>
                ))} 
              </div> : (
                null
              )}
            </> : (
              <div className={styles.home__items}>
                <span className={styles.home__result}>Ничего не найдено, попробуйте другие ключевые слова.</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <>
        <SwiperGames/>
        <div className='container'>
        <SortByPopup
          activeSortType={sorting.type}
          onSortClickType={setSortingItems}
          items={sortItems}
          popup={popup} 
          setPopup={changeHandlerPopup}
        />
          <div className={styles.home__block}>  
            {loaded ? <>
             <Loader/>          
            </> : (<div className={styles.home__list}>
              <CartList games={games}/>
            </div>)
            }
            <div className={styles.genres}>
              <SliderRange onChangePrice={setRangeItems} value={range}/>
              <GenresList onClickGenres={setCategoryItems} genres={genres} />
            </div>
          </div>
          {limit === 21 || category ? null : <button onClick={setLimitItems} className={styles.home__btn}>Показать еще</button> }
        </div>
      </>
    </>
  )
}