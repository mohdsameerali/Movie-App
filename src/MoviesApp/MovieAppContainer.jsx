
import React, { useState } from 'react'
import {css} from "./MovieApp.css"
import MovieCard from "./MovieCard";
import Home from './Home';


export default function MovieAppContainer() {

const[data,setdata]=useState([])
const[search,setsearch]=useState("");
  function myfun(e){
e.preventDefault();
let sam=fetch(`https://www.omdbapi.com/?apikey=e70daa5a&s=${search}`).then((response) => response.json()).then((data) => setdata(data.Search))

}
  
  return (
    <>
    <div className='bigcon'>
      <div className='container' id='maincon'>
      <h1>Movie Search App</h1>
        <form className='box mb-5' onSubmit={myfun}>
        <input size="50" placeholder='Search Your Favourite Movies '   value={search} onChange={(e)=>{setsearch(e.target.value)}}  />
        <button className='ml-3 btn btn-info' type='submit'  value="search" onClick={myfun} >search</button>
        </form>

      </div>
      {  data.length>=1 ? <MovieCard mydata={data}/>:<Home/>}{/* condition? if true: if false */}
    
    </div>
    </>
  )
}