import React from 'react'

const AlignCenter = (OriginalComponent) => {
  class NewComponent extends React.Component
  {
      render()
      {
        return <OriginalComponent style={{color: "red"}} name='Protagonist'/>
      }
  }
  return NewComponent
}

export default AlignCenter