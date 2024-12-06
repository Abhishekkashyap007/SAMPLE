import React from 'react'
import Noidabranch from './Noidabranch'

export default function Delhibranch(props) {
  return (
    <div className='border bg-warning p-5'>
      Delhibranch
      <p>{props.name}</p>
      <p>{props.amt}</p>
      <p>{props.price}</p> 
      <Noidabranch xyz={props.name}></Noidabranch>
    </div>
  )
}
