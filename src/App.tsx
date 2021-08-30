import React from "react";
import { Navbar } from "./components/Navbar";
import {TodosPage} from "./pages/TodosPages";

;

const App: React.FunctionComponent = () => {

  return (
    <div>
      <Navbar />
      <TodosPage/>
    </div>
  );
};

export default App;
