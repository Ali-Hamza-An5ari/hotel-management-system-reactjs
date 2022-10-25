import React from 'react'
import { useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../../State/index'


function Shop() {
  const dispatch = useDispatch()
  // const actions = bindActionCreators(actionCreators,dispatch)
  const {depositFund, withdrawFund} = bindActionCreators(actionCreators,dispatch)
  return (
    <>
    
    {/* <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.withdrawFund(100))}}>-</button>
      Add to cartc
      <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.depositFund(100))}}>+</button>
     */}
      {/* <button className='btn btn-primary mx-2' onClick={() => {actions.withdrawFund(100)}}>-</button>
      Add to cartc
      <button className='btn btn-primary mx-2' onClick={() => {actions.depositFund(100)}}>+</button> */}
      
      <button className='btn btn-primary mx-2' onClick={() => {withdrawFund(100)}}>-</button>
      Add to cartc
      <button className='btn btn-primary mx-2' onClick={() => {depositFund(100)}}>+</button>
    </>
  )
}

export default Shop