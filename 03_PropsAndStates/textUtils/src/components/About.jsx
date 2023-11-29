import React from 'react'

export default function About(props) {
  return (
    <div className='container'style={{marginTop:"10px",position:"absolute", width:"80%", left: "50%", transform: "translateX(-50%)"}} >
       <div className='d-flex flex-column m-auto'>
       <h1>{props.aboutHeader}</h1>
       <div className='mt-2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo quam voluptatem. Eveniet illum quasi quae et fugiat voluptatibus quod quis eum eos? Placeat magnam perferendis eveniet obcaecati corporis exercitationem libero quas laboriosam culpa distinctio, voluptas quo consequatur sapiente facilis explicabo suscipit est optio dolore, error magni atque quibusdam. Ullam.</p>
        </div>
       </div>
    </div>
  )
}
