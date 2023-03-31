import { createContext } from "preact";

export const Test = () => {
  console.log("ctx2");
};

export const Context = createContext<any>(null);
