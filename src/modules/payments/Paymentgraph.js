import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";


function Paymentgraph() {
  const [singledata, updatedata] = useState([])
  const [cdata,setcdata]= useState([])

  const myapi = () => {
    axios.get(`https://fakestoreapi.com/products`).then((d) => {
      console.log(d.data);
      updatedata(d.data)
      localStorage.setItem("mylocation",JSON.stringify(d.data));
    });
  }

  useEffect(() => {
    myapi();
  }, [])

  const changedata=(e)=>{
    console.log(e.target.value);
    setcdata(singledata.filter((fdata)=>{
      return fdata.category===e.target.value
    }))
  }

  return (
    <Fragment>
      <select onChange={changedata}>
        {singledata.map((fd)=>{
          return <option>{fd.category}</option>
        })}
      </select>
    <div className='mainpage'>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={cdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="price"
            fill="black"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
    </Fragment>
  )
}

export default Paymentgraph