import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQComp from './components/FAQComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
    <div className='max-w-3xl mx-auto' >
       <h1 className='text-4xl font-bold text-center text-gray-800 mb-8 '>Frequently Asked Questions</h1>
      <FAQComp/>
    </div>
   </div>
  )
}

export default App
