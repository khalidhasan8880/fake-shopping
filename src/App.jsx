import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cosmetics from './components/Cosmetics/Cosmetics'
const products = [
  {id: '039djkljkds21222', name : "Nail Polish",price : 30323,},
  {id:'lkdsfja2310909000', name : "alta",price : 3322,},
  {id: 'dfas;jl;woue2333', name : "sonu",price : 23342,},
  {id: 'ljkdfagrq-132666', name : "Eye Buru",price : 30,},
  {id: 'sadfsadf-132666', name : "Eye sila",price : 303,},
  {id: 'ljkdfagrq-we2332', name : "Eye bor",price : 3032,}
]
function App() {
  const [count, setCount] = useState(0)
 



  return (
    <div className="App">
      <h1 className='text-3xl font-bold my-7'>WelCome to the Fake Shopping </h1>

      <div className='card-container  flex flex-wrap gap-4'>
        {
          products.map(product=> <Cosmetics key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default App
