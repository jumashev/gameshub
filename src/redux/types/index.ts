import { TypeCartItems, TypeGenresItems } from './../../types/index';

export enum Types {
  APP_GAMES = 'APP/GAMES',
  APP_GENRES = 'APP/GENRES',
  APP_CATEGORY = 'APP/CATEGORY',
  APP_CHECKED = 'APP/CHECKED',
  APP_SORTING = 'APP/SORTING',
  APP_LIMIT = 'APP/LIMIT',
  APP_LOADED = 'APP/LOADED',
  APP_SEARCH = 'APP/SEARCH',
  APP_SEARCH_BAR = 'APP/SEARCH/BAR',
  APP_RANGE = 'APP/RANGE',
  APP_FILTERD_GAMES = 'APP/FILTERD/GAMES',
  APP_FILTERD_GAMES_BAR = 'APP/FILTERD/GAMES/BAR'
}

export type TypeGames = {
  type:Types.APP_GAMES,
  payload:TypeCartItems[]
}
export type TypeGenres = {
  type:Types.APP_GENRES,
  payload:TypeGenresItems[]
}

export type TypeCategory = {
  type: Types.APP_CATEGORY
  payload:any | string | null
}

export type TypeRange = {
  type: Types.APP_RANGE,
  payload: string | number
}

export type TypeSorting = {
  type:Types.APP_SORTING,
  payload: {
    type:string | null,
    order:string
  }
}

export type TypeFilterdItems = {
  type:Types.APP_FILTERD_GAMES,
  payload:TypeCartItems[]
}

export type TypeFilterdItemsBar = {
  type:Types.APP_FILTERD_GAMES_BAR,
  payload:TypeCartItems[]
}

export type TypeLoading = {
  type:Types.APP_LOADED
  payload:boolean
}

export type TypeSearch = {
  type:Types.APP_SEARCH | Types.APP_SEARCH_BAR,
  payload:string
}

export type TypeChecked = {
  type:Types.APP_CHECKED,
  payload:boolean | number
}

export type TypeLimit = {
  type:Types.APP_LIMIT,
}

export type TypeData = TypeGenres | TypeFilterdItems | TypeFilterdItemsBar | TypeRange | TypeGames | TypeCategory | TypeSearch | TypeSorting | TypeLoading | TypeLimit