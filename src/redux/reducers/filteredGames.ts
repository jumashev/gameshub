import { TypeFilterdList } from './../../types/index';
import { TypeData, Types } from './../types/index';

const initialState:TypeFilterdList = {
  filterdGames:[],
  search:'',
  searchBar:''
}

type TypeInitialState = typeof initialState

export const filterdGames = (state:TypeInitialState = initialState, action:TypeData):TypeFilterdList => {
  switch (action.type) {
    case Types.APP_FILTERD_GAMES: {
      const {search, searchBar} = state
      return {
        ...state,
        filterdGames:action.payload.filter((item) => {
          if (searchBar.length) {
            return item.name.toLowerCase().includes(searchBar.toLowerCase())
          } else if (search.length) {
            return item.name.toLowerCase().includes(search.toLowerCase())
          }

          return item
        })
      }      
    }

    
    case Types.APP_SEARCH_BAR: {
      return {
        ...state,
        searchBar:action.payload
      }
    }

    case Types.APP_SEARCH: {
      return {
        ...state,
        search:action.payload
      }
    }

    default:
      return state
  }
}