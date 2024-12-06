import React, { Fragment } from 'react'
import Noidabranch from './Noidabranch'
import Delhibranch from './Delhibranch'

function Paymentabout(){
    var amount = 600;
    var syl="Mern Full stack";
    return(
        <Fragment>
        <div className='mainpage'>
            Paymentabout{amount}
            <Noidabranch  ></Noidabranch>
            <Delhibranch price={amount} amt="" name={syl}></Delhibranch>
        </div>
        
        </Fragment>
    )
}

export default Paymentabout