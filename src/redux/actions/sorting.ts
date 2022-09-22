import { TypeLimit } from './../types/index';
import { TypeSort } from "../../components/SortByPopup/SortByPopup";
import { Types, TypeSorting } from "../types";

type TypeVoidSorting = (data:TypeSort) => TypeSorting
type TypeFuncSorting = ReturnType<typeof setSorting>

type TypeVoidLimit = () => TypeLimit
type TypeFuncLimit = ReturnType<typeof setLimit>

export const setSorting:TypeVoidSorting = (data:TypeSort):TypeFuncSorting => {
  return {
    type:Types.APP_SORTING,
    payload:data
  }
}

export const setLimit:TypeVoidLimit = ():TypeFuncLimit => {
  return {
    type:Types.APP_LIMIT,
  }
}