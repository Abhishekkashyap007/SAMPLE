import React,{Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import Footerpage from '../shares/Footerpage'

export default function Courselandingpage() {
    return (
        <Fragment>
            <div className='mainpage' style={{marginTop:"0px",minHeight:"80vh"}}>
            <Outlet />
            </div>
            <Footerpage />
        </Fragment>
    )
}
