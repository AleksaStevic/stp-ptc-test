import Consumer from "./Consumer";
import { Context as Context1 } from "./Context1";
import { Context as Context2 } from "./Context2";

function App() {
  return (
    <Context1.Provider value={{ value: "context 1" }}>
      <Context2.Provider value={{ value: "context 2" }}>
        <Consumer />
      </Context2.Provider>
    </Context1.Provider>
  );
}

export default App;
