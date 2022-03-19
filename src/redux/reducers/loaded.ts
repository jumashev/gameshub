import { TypeData, Types } from './../types/index';

const initialState = {
  loaded:true
}

type TypeInitialState = typeof initialState

export const loaded = (state:TypeInitialState = initialState, action:TypeData) => {
  switch (action.type) {
    case Types.APP_LOADED: {
      return {
        ...state,
        loaded:action.payload
      }
    }

    default:
      return state
  }
}