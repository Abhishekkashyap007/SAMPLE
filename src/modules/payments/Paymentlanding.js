import React, { Fragment } from 'react'
import Headerpage from '../shares/Headerpage'
import Footerpage from '../shares/Footerpage'
import { Outlet } from 'react-router-dom';

function Paymentlanding() {
    return (
        <Fragment>
            <Headerpage />
            <Outlet/>
            <Footerpage />
        </Fragment>
    )
}

export default Paymentlanding;