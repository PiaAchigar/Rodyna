import { useState } from 'react'
import cruz from "./assets/cruz_color_claro.svg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={cruz} className="logo" alt="Logo Rodyna" />
        </a>
      </div>
      <h1>Rodyna Farmacias</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click me {count}
        </button>
      </div>
      <p className="read-the-docs">
       🚧 Página en construcción ⚒️
      </p>
    </>
  )
}

export default App
