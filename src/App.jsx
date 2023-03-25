import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmatics from './components/cosmatics/Cosmatics'
const products = [
  {id: '039djkljkds21222', name : "Nail Polish",price : 30323,},
  {id:'lkdsfja2310909000', name : "alta",price : 3322,},
  {id: 'dfas;jl;woue2333', name : "sonu",price : 23342,},
  {id: 'ljkdfagrq-132666', name : "Eye Buru",price : 30,}
]
function App() {
  const [count, setCount] = useState(0)
 



  return (
    <div className="App">
      <h1>hello from main function </h1>
      {
        products.map(product => <Cosmatics key={products.indexOf(product)} product={product}> </Cosmatics>)
      }
    </div>
  )
}

export default App
