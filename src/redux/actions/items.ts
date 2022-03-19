import { getGames, getDetails, getGenres, getFilterdGames, getFilterdGamesBar } from './../../api/api';
import { Dispatch } from 'react';
import { TypeCartItems, TypeGenresItems } from './../../types/index';
import { Types, TypeGames, TypeGenres, TypeFilterdItems, TypeLoading, TypeSearch, TypeChecked, TypeCategory, TypeFilterdItemsBar } from './../types/index';

type TypeSorting = {
  type:string | null
  order:string
}

type voidSetLoaded = (loaded:boolean) => TypeLoading | TypeFilterdItems | TypeGames | TypeFilterdItemsBar

type TypeVoidGenres = (genres:TypeGenresItems[]) => TypeGenres
type TypeFuncGenres = ReturnType<typeof setGenres>

type TypeFuncAction = ReturnType<typeof setLoaded> | ReturnType<typeof setFilterdGames> | ReturnType<typeof setFilterdGamesBar>
type TypeFuncFetchGames = ReturnType<typeof fetchGames>

type TypeVoidItems = (items:TypeCartItems[]) => TypeFilterdItems | TypeFilterdItemsBar | TypeGames
type TypeFuncItems = ReturnType<typeof setFilterdGames> | ReturnType<typeof setGames> 

type TypeVoidSearch = (search:string) => TypeSearch
type TypeFuncSearch = ReturnType<typeof setSearchBar>

type TypeVoidSearchBar = (searchBar:string) => TypeSearch
type TypeFuncSearchBar = ReturnType<typeof setSearch>

type voidFetchGames<T, R extends TypeSorting> = (category:T, sortBy:R, limit:number, range:string | number) 
=> (dispatch:Dispatch<TypeGames | TypeLoading>) => any

type voidDetailsGames = () => (dispatch:Dispatch<TypeFuncItems>) => any
type TypeFuncDetailsGames = ReturnType<typeof fetchDetails>

type voidGenres = () => (dispatch:Dispatch<TypeGenres>) => any
type TypeFuncGenresItems = ReturnType<typeof fetchGenres>

type voidFetchFilterdGames = (search:string) => (dispatch:Dispatch<TypeFuncItems>) => any
type TypeFuncFetchFilterdGames = ReturnType<typeof fetchFilterdGames>

export const setLoaded:voidSetLoaded = (loaded:boolean):TypeFuncAction => {
  return {
    type:Types.APP_LOADED,
    payload:loaded
  }
}

export const fetchGames:voidFetchGames<TypeCategory, TypeSorting> = <T, R extends TypeSorting>(category:T, sortBy:R, limit:number, range:string | number):TypeFuncFetchGames => {
  return (dispatch:Dispatch<any>) => {
    getGames(category, sortBy, limit, range).then(({data}) => {
      dispatch(setGames(data))
      dispatch(setLoaded(false))
    })
  }  
}

export const fetchDetails:voidDetailsGames = ():TypeFuncDetailsGames => {
  return function(dispatch:Dispatch<TypeFuncItems>) {
    getDetails().then(({data}) => {
      dispatch(setGames(data))
    })
  }
}

export const fetchGenres:voidGenres = ():TypeFuncGenresItems => {
  return (dispatch:Dispatch<TypeGenres>) => {
    getGenres().then(({data}) => {
      dispatch(setGenres(data))
    })
  }
}

export const fetchFilterdGames:voidFetchFilterdGames = (search:string):TypeFuncFetchFilterdGames => {
  return (dispatch:Dispatch<TypeFuncItems>) => {
    getFilterdGames(search).then(({data}) => {
      dispatch(setFilterdGames(data))
    })
  }
}

export const fetchFilterdGamesBar:voidFetchFilterdGames = (searchBar:string):TypeFuncFetchFilterdGames => {
  return (dispatch:Dispatch<TypeFuncItems>) => {
    getFilterdGamesBar(searchBar).then(({data}) => {
      dispatch(setFilterdGamesBar(data))
    })
  }
}


export const setFilterdGames:TypeVoidItems = (items:TypeCartItems[]):TypeFuncItems => {
  return {
    type:Types.APP_FILTERD_GAMES,
    payload:items
  }
}

export const setFilterdGamesBar:TypeVoidItems = (items:TypeCartItems[]):TypeFuncItems => {
  return {
    type:Types.APP_FILTERD_GAMES_BAR,
    payload:items
  }
}


export const setGames:TypeVoidItems = (items:TypeCartItems[]):TypeFuncItems => {
  return {
    type:Types.APP_GAMES,
    payload:items
  }  
}

export const setGenres:TypeVoidGenres = (genres:TypeGenresItems[]):TypeFuncGenres => {
  return {
    type:Types.APP_GENRES,
    payload:genres
  }  
}

export const setSearch:TypeVoidSearch = (search:string):TypeFuncSearch => {
  return {
    type:Types.APP_SEARCH,
    payload:search
  }
}

export const setSearchBar:TypeVoidSearchBar = (searchBar:string):TypeFuncSearchBar => {
  return {
    type:Types.APP_SEARCH_BAR,
    payload:searchBar
  }
}

export const setChecked = (checked:boolean | number):TypeChecked => {
  return {
    type:Types.APP_CHECKED,
    payload:checked
  }
}
