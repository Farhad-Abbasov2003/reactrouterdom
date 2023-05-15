import React from "react";
import { Route, Routes } from "react-router-dom";
import Home2 from "./Home2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home2 />} />
      </Routes>
    </div>
  );
};

export default App;
