import { TypeFilterdListBar } from './../../types/index';
import { TypeData, Types } from './../types/index';

const initialState:TypeFilterdListBar = {
  filterdGamesBar:[],
  searchBar:''
}

type TypeInitialState = typeof initialState

export const filterdGamesBar = (state:TypeInitialState = initialState, action:TypeData):TypeFilterdListBar => {
  switch (action.type) {
    case Types.APP_FILTERD_GAMES_BAR: {
      const {searchBar} = state
      return {
        ...state,
        filterdGamesBar:action.payload.filter((item) => {
          return item.name.toLowerCase().includes(searchBar.toLowerCase())
        })
      }      
    }

    
    case Types.APP_SEARCH_BAR: {
      return {
        ...state,
        searchBar:action.payload
      }
    }

    default:
      return state
  }
}