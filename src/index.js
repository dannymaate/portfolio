import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Works from "./pages/Works";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import { HashRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
	<React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/works' element={<Works />}/>
        <Route path='/articles' element={<ArticleList />}/>
        <Route path='/article/:title' element={<Article />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);