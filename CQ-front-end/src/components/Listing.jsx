import React from 'react'
import list from '../../public/list.json';
function Listing() {
    const filterData= list.filter((data)=>data.State==="Madhya pradesh");
    console.log(filterData);
  return (
    <>
    <div>
      <h1></h1>
    </div>
    </>
  )
}

export default Listing
