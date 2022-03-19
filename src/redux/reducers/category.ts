import { TypeData, Types } from './../types/index';

const initialState = {
  category:null
}

type TypeInitialState = typeof initialState

export const category = (state:TypeInitialState = initialState, action:TypeData) => {
  switch (action.type) {
    case Types.APP_CATEGORY: {
      return {
        ...state,
        category:action.payload
      }
    }

    default:
      return state
  }
}