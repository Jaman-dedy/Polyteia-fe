/* Redux ts document recommend to disable this */
/* eslint-disable @typescript-eslint/no-restricted-imports */
import type { TypedUseSelectorHook} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector