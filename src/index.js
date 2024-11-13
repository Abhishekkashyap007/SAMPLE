import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Abc from './About';

import Xyz,{Contact1} from './Contactus.ts';
import Myfunc from './Myfunctioncomp.js';
import Myheader from './Myheader.js';
import Myreactbootstrap from './Myreactbootstrap.js';
import Mymui from './Mymui.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*<Abc></Abc>
  <Xyz></Xyz>
  <Contact1></Contact1>
  <Myfunc/>
  <Myheader></Myheader>
  <Myreactbootstrap></Myreactbootstrap>
  <h1>use of MUI</h1>
  <Mymui></Mymui>*/}
  <BrowserRouter>
  <Routes>
    <Route path='page' element={<Mymui/>}></Route>
    <Route path='/' element={<Contact1/>}></Route>
    <Route path='*' element={<Abc/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

