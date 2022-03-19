import { TypeRangeState } from '../../types';
import { TypeData, Types } from './../types/index';

const initialState:TypeRangeState = {
  range:''
}

type TypeInitialState = typeof initialState

export const range = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch (action.type) {
    case Types.APP_RANGE: {
      return {
        ...state,
        range:action.payload
      }
    }
    
    default:
      return state
  }
}