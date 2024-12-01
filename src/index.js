import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Userregistor from './modules/auth/Userregistor';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Paymentlanding from './modules/payments/Paymentlanding';
import Paymentabout from './modules/payments/Paymentabout';
import PaymentDetails from "./modules/payments/Paymentdetails";
// import Paymentdetails from '';
import Payhomepage from './modules/payments/Payhomepage';
import Courselandingpage from './modules/courses/Courselandingpage';
import Coursehomepage from './modules/courses/Coursehomepage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage />}></Route>
        <Route path='registor' element={<Userregistor />} />
        <Route path='landing/' element={<Mylandingpage />} />

        <Route path='landing/payment' element={<Paymentlanding />}>
          <Route path='' element={<Payhomepage />} />
          <Route path='about' element={<Paymentabout />} />
          <Route path='payment-details' element={<PaymentDetails />} />
        </Route>
        {/* <Route path='payment-details' element={<Paymentdetails/>}></Route> */}
        <Route path='landing/course' element={<Courselandingpage/>}>
        <Route path='' element={<Coursehomepage/>}></Route>

        </Route>
        </Routes> 

    </BrowserRouter>

  </React.StrictMode>
);


