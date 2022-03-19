import { Types, TypeCategory } from './../types/index';

type TypeVoidCategory = (category:string | null) => TypeCategory
type TypeFuncCategory = ReturnType<typeof setCategory>

export const setCategory:TypeVoidCategory = (category:string | null):TypeFuncCategory => {
  return {
    type:Types.APP_CATEGORY,
    payload:category
  }
}
