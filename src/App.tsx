import React from "react";
import { BrowserRouter, Routes,Navigate,  Route } from "react-router-dom";

import { Todo, Login } from "./pages";

import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Navigate to = '/todo' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
