import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Todo, Login } from "./pages";


import "./App.scss";

const App: React.FC = () => {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
