import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Resume from "./containers/resume/Resume";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
