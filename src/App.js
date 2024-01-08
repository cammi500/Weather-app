import React from 'react'
import Form from './components/Form.jsx'
import Card from './components/Card.jsx'

 const App = () => {
  return (
  
    <div className="flex justify-center w-full items-stretch min-w-full text-3xl  flex-initial  ... text-green-600">
      <div className="shadow-lg bg-slate-300  gap-4">
      <Form/> 
      <Card/>
    </div>
    </div>
  )
}
export default App
// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold  text-red-600 underline">
//       Hello world!
//     </h1>
//   )
// }
