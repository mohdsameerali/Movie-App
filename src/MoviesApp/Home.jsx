
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='container' id='homecon'>
    <h3 className='my-3 text-center'>Search Your Favourite Movie Series like Avengers, Avatar, pirates And Many More</h3>
        <div className='row'>
            <div className='col-3 mb-3'>
                <img id='homeimg' src='images\avengers.jpg'/>
            </div>
            <div className='col-3 mb-3'>
                <img id='homeimg' src='images\hulk.webp'/>
            </div>
            <div className='col-3 mb-3'>
                <img id='homeimg' src='images\jumanji.jpg'/>
            </div>
            <div className='col-3 mb-3 '>
                <img id='homeimg' src='images\matrix.jpg'/>
            </div>
            <div className='col-3 mb-3 '>
                <img id='homeimg' src='images\pirates.jpg'/>
            </div>
            <div className='col-3 mb-3'>
                <img id='homeimg' src='images\avatar.jpg'/>
            </div>
            <div className='col-3 mb-3 '>
                <img id='homeimg' src='images\titanic.jpg'/>
            </div>
            <div className='col-3 mb-3 '>
                <img id='homeimg' src='images\top gun.jpg'/>
            </div>
        </div>
    </div>
    </>
  )
}



