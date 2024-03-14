import {Dispatch, SetStateAction} from "react";

type UseStateType<T> = [T, Dispatch<SetStateAction<T>>];

export default UseStateType;