import { TypeGenresList } from './../../types/index';
import { TypeData, Types } from './../types/index';

const initialState:TypeGenresList = {
  genres:[]
}

type TypeInitialState = typeof initialState

export const genres = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch (action.type) {
    case Types.APP_GENRES: {
      return {
        ...state,
        genres:action.payload
      }
    }

    default:
      return state
  }
}