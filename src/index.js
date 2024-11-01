import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Abc from './About';
import Xyz,{Contact1} from './Contactus.ts';
import Myfunc from './Myfunctioncomp.js';
import Myheader from './Myheader.js';
import Myreactbootstrap from './Myreactbootstrap.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Abc></Abc>
  <Xyz></Xyz>
  <Contact1></Contact1>
  <Myfunc/>
  <Myheader></Myheader>
  <Myreactbootstrap></Myreactbootstrap>
  </React.StrictMode>
);

