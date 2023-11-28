import React, { useEffect, useState } from 'react'

export default function GitHub() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/MuraliAirody')
        .then((res)=>res.json())
        .then((res)=>{
             setData(res);
             console.log(data);

        })

    })
  return (
    <div className='flex flex-col justify-center gap-4 items-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <div>Github Name: <span className='text-green-500'>{data.name}</span></div>
    <div>Github followers: {data.followers}</div>
    </div>
  )
}
