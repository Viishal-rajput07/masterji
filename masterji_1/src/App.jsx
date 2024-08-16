import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [datas, setdatas] = useState([])
  // let response;

  useEffect( async()=>{
    const data = await fetch(` https://api.freeapi.app/api/v1/public/cats?page=1&limit=4`)
     let response = await data.json()
     setdatas(response.data.data[0].description)
     console.log(response.data.data[0].description)
 } , [])

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{datas}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div  className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
