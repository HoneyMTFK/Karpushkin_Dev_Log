import { useContext} from "react";
import { ListContext, ListDispatchContext } from "./provider";


export function useList() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("Контекст используется вне провайдера!");
  }
  return context;
}

export function useListDispatch() {
  const context = useContext(ListDispatchContext);
  if (!context) {
    throw new Error("Контекст используется вне провайдера!");
  }
  return context;
}