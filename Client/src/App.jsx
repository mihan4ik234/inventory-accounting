import { useState } from 'react'
import './App.css'
import Header from './Header'
import Filter from './Filter'
import Spisok from './spisok'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
      </Header>
      <Filter />
      <Spisok/>

    </>
  )
}

export default App
