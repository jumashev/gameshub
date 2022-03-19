import { TypeGenresItems } from './../types/index';
import axios from "axios"
import { TypeCartItems } from "../types"

type TypeSorting = {
  type:string | null
  order:string
}

export const getGames = <T, R extends TypeSorting>(category:T, sortBy:R, limit:number, range:string | number) => {
  return axios.get<TypeCartItems[]>(`http://localhost:3001/games?${category !== null ? `category=${category}` : ''}${`&_sort=${sortBy.type ? sortBy.type : null}&_order=${
      sortBy.order ? sortBy.order : ''}`}
    }&_limit=${limit}&${range ? `price=${range}`  : `${null}`}`)
}

export const getDetails = () => {
  return axios.get<TypeCartItems[]>(`http://localhost:3001/games`)
}

export const getGenres = () => {
  return axios.get<TypeGenresItems[]>('http://localhost:3001/genres')
}

export const getFilterdGames = (search:string) => {
  return axios.get<TypeCartItems[]>(`http://localhost:3001/games?q=${search}`)
}

export const getFilterdGamesBar = (searchBar:string) => {
  return axios.get<TypeCartItems[]>(`http://localhost:3001/games?q=${searchBar}`)
}