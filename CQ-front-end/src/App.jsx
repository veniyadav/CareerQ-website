import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
     <h1>veni @ full stack boy | Joker</h1>
     <h3>JOKES :{jokes.length}</h3>
     {
      jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>

      ))
     }
    </>
  )
}

export default App
