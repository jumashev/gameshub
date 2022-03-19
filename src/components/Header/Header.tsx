import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setSearchBar } from '../../redux/actions/items'
import { Modal } from '../Modal/Modal'
import { NavBar } from '../NavBar/NavBar'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './Header.module.scss'

export const Header:React.FC = ():JSX.Element => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState<boolean>(false)
  const filterdGames = useTypedSelector(state => state.filterdGamesBar.filterdGamesBar)
  const value = useTypedSelector(state => state.filterdGamesBar.searchBar)

  console.log(filterdGames)

  const handlerChangeModal = ():void => {
    setModal(!modal)
  }

  const handlerChangeInput = (e:React.ChangeEvent<HTMLInputElement>):void => {
    dispatch(setSearchBar(e.target.value))
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="header__inner d-flex align-items-center">
          <Link to='/' className={styles.header__logo}>
            <img className='header__logo-item' src={logo} alt="" />
          </Link>
          <div className='w-100 d-flex align-items-center justify-content-between'>
            <NavBar/>
            <SearchBar 
              value={value}
              onChangeValue={handlerChangeInput} 
              games={filterdGames} 
              onClickModal={handlerChangeModal}
            />
            {modal ? <Modal onClose={handlerChangeModal}/> : ''}
          </div>
        </div>
      </div>
    </header>
  )
}