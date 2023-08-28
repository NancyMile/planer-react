import Header from './components/Header'
import { useState } from 'react'

function App() {

  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
      />
    </div>
  )
}

export default App
