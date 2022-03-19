export type TypeCartItems = {
  id:number,
  name:string,
  images:string,
  price:number
  category:string
}

export type TypeCart = {
  games:TypeCartItems[]
}

export type TypeRangePrice = {
  max:number,
  min:number
}

export type TypeGenresItems = {
  id:number
  checked:boolean
  label:string,
  title:string
  onClickGenres:(title:string | null) => void;
}

export type TypeGenres = {
  genres:TypeGenresItems[]
  onClickGenres:(title:string  | null) => void;
}

export type TypeFilterdList = {
  filterdGames:TypeCartItems[]
  search:string
  searchBar:string
}

export type TypeFilterdListBar = {
  filterdGamesBar:TypeCartItems[]
  searchBar:string
}

export type TypeRangeState = {
  range:string | number
}

export type TypeGenresList = {
  genres:TypeGenresItems[]
}