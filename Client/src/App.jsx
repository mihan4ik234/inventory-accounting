import { useState } from 'react'
import './App.css'
import Header from './Header'
import Filter from './Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
      </Header>
    <Filter/>
    </>
  )
}

export default App
