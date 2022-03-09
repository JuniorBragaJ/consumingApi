import { useState } from 'react'
import './App.css'


function App() {
  const [chuckNorrisJoke, setChuckNorrisJoke] = useState('')
  
  function fetchData() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => {return response.json()})
      .then((data) => {setChuckNorrisJoke(data.value)})
  }

  return (
    <div className="App">
      <button type="button" onClick={() => fetchData()}>
            New Joke
          </button>
        <h1>{chuckNorrisJoke}</h1>
    </div>
  )
}

export default App
