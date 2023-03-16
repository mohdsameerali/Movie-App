import React from 'react'

export default function MovieCard({mydata}) {
  return (
    <>
      <div className='container-fluide'>
        <div className='row  no-gutters'>
        {mydata.map((i)=>
          <div className='col-2 mt-5'>
            <img src={i.Poster}/>
            <div className='title'>{i.Title}</div>
            <div className='year'>{i.Year}</div>

            <button className='btn bg-info'>buy Now</button>
          </div>)}
        </div>
      </div>
    </>
  )
}










