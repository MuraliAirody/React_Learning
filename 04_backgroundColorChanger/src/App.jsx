import { useState } from 'react'


function App() {
  const[color,setColor] = useState("")
  return (
    <>
      <div className="d-flex container-fluid align-items-end" style={{ backgroundColor: color, height: '100vh',color:'white' }}>
        <div className='d-flex justify-content-center w-100 gap-2 my-4'>
          <button onClick={()=>setColor('#ADFF2F')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#ADFF2F',color:'white'}}>GreenYellow</button>
          <button onClick={()=>setColor('#DC143C')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#DC143C',color:'white'}}>Crimson</button>
          <button onClick={()=>setColor('#FF4500')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#FF4500',color:'white'}}>OrangeRed</button>
          <button onClick={()=>setColor('#228B22')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#228B22',color:'white'}}>ForestGreen</button>
          <button onClick={()=>setColor('#D3D3D3')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#D3D3D3',color:'white'}}>LightGrey</button>
          <button onClick={()=>setColor('#BA55D3')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#BA55D3',color:'white'}}>MediumOrchid</button>
          <button onClick={()=>setColor('#000000')} className="item rounded-pill p-2 border-0" style={{backgroundColor:'#000000',color:'white'}}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App
