import { useContext } from "preact/hooks";

import { Context as Context1 } from "./Context1";
import { Context as Context2 } from "./Context2";

function Consumer() {
  console.log(useContext(Context1));
  console.log(useContext(Context2));

  return null;
}

export default Consumer;
