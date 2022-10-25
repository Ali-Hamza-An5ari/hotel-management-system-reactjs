import React from 'react'
import { useState } from 'react/cjs/react.development'
import AlignCenter from './AlignCenter'
import WithComponent from './withComponent'

const ClickCounter = () => {
  // const {count, incrementCount} = this.props
  const {name} = this.props
  const [count, setCount] = useState(0)
  function incrementCount()
  {
      setCount(count +1)
      // this.setState(prevState =>
      //     {
      //         return {count : prevState.count+1}
      //     })
  }
  return (
    <> 
      <button 
       onClick={incrementCount}>{name}  Clicked {count} times
      </button>
    </>
  )
}
export default AlignCenter(ClickCounter)
// export default ClickCounter
// export default WithComponent(ClickCounter)