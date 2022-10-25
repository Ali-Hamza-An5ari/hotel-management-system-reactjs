import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { countActionCreators } from '../../state2'


export default function Counter() {
  const count = useSelector(state => state.count)
  const dispatch  = useDispatch()
  const {increment, decrement} = bindActionCreators(countActionCreators, dispatch)
  console.log(count)
  return (
    <>
        <h2>Count:{count} </h2>
        <div>
            <h3>Please click a button: {count}</h3>
            <button onClick={()=>{increment(10)}}>Add {count}</button>
            <h4>----</h4>
            <br/>
            <button onClick={()=>{decrement(10)}}>Minus</button>
        </div>
    </>
  )
}
