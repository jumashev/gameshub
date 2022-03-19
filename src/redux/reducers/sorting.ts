import { TypeData, Types } from './../types/index';

type TypeSortingLimit = {
  sortBy: {
    type:string | null
    order:string
  },
  limit:number
}

const initialState:TypeSortingLimit = {
  sortBy: {
    type:null,
    order:''
  },
  limit:12
}

type TypeInitialState = typeof initialState

export const sorting = (state:TypeInitialState = initialState, action:TypeData):TypeInitialState => {
  switch (action.type) {
    case Types.APP_SORTING: {
      return {
        ...state,
        sortBy:action.payload
      }
    }

    case Types.APP_LIMIT: {
      return {
        ...state,
        limit: state.limit + 3
      }
    }

    default:
      return state
  }
}