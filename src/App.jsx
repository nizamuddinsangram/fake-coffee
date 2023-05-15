import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Component/CoffeeCard'
import { useState } from 'react'

function App() {
   const loaderCoffees =useLoaderData()
   const [coffees,setCoffees] = useState(loaderCoffees)
  return (
    <div className='m-20'>
   
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot cold coffee:{coffees.length}</h1>
     
     <div className='grid md:grid-cols-2 gap-4'  >
     {
      coffees.map(coffee=><CoffeeCard
     key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
      ></CoffeeCard>)
     }
     </div>
    </div>
  )
}

export default App
