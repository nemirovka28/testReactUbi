import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Page404 from "./components/Pages/404";
import './styles/App.css';
import {privateRoutes, pablicRoutes} from './components/Router/index'
import Login from "./components/Pages/Login";

function App() {

  const isAuth = true;

  return (
        <BrowserRouter>
              <Navbar/>
            <main>
                    {
                      isAuth 
                      ?
                        <Routes>
                          {
                          privateRoutes.map( com => 
                            <Route path={com.path} element={com.component}/>
                          )}
                          <Route path = '*' element={<Page404/>} />
                        </Routes>
                      : 
                        <Routes>
                            {
                            pablicRoutes.map( com => 
                              <Route path={com.path} element={com.component}/>
                            )}
                             <Route path = '*' element={<Login/>} />
                        </Routes>
                    }                           
            </main>
        </BrowserRouter>
  )
}

export default App;
