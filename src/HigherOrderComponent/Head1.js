import React from 'react'
import AlignCenter from './AlignCenter'
import Hoc from './HOC'

const Head1 = () => {
  return (
      <div>
        <h3> Head1</h3>
      </div>
  )
}
// Head1 = AlignCenter(Head1)
Head1 = Hoc(Head1)
export default Hoc(Head1)