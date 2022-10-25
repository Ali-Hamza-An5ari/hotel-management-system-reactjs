import React from 'react'
import { Footer } from './MyComponents/Footer'
import Header from './MyComponents/Header'
import { Todos } from './MyComponents/Todos'

export default function App() {
    let todos = [
        {sno:1, name:"Shopping"},
        {sno:2, name:"Car washing"}
    ]
  return (
    <div>
        <Header />
        <Todos todos={todos}/>
        <Footer/>
    </div>
  )
}
