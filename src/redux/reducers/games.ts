import { TypeCart } from './../../types/index';
import { TypeData, Types } from '../types/index';

const initialState:TypeCart = {
  games:[],
}

type TypeInitialState = typeof initialState

export const games = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch (action.type) {
    case Types.APP_GAMES: {
      return {
        ...state,
        games:action.payload,
      }
    }

    default:
      return state
  }
}