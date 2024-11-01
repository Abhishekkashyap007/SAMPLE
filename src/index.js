import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import Xyz,{Contact1} from './Contactus.ts';
import Myfunc from './Myfunctioncomp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Abc></Abc>
  <Xyz></Xyz>
  <Contact1></Contact1>
  <Myfunc/>
  </React.StrictMode>
);

