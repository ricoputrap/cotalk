import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

type AppDispatchType = () => AppDispatch;

export const useAppDispatch: AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;