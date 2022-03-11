import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { RootState } from "../redux/combineReducer"

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector