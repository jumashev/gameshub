import { Types, TypeRange } from './../types/index';

type TypeVoidRange = (range:string | number) => TypeRange
type TypeFuncRange = ReturnType<typeof setRange>

export const setRange:TypeVoidRange = (range:string | number):TypeFuncRange => {
  return {
    type:Types.APP_RANGE,
    payload: range
  }
}