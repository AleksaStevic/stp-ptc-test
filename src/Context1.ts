import { createContext } from "preact";

export const Test = () => {
  console.log("ctx1");
};

export const Context = createContext<any>(null);
