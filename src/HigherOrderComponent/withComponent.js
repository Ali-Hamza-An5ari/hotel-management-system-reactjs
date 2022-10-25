import React from 'react'

const WithComponent = (OriginalComponent) => 
{
    class EnhancedComponent extends React.Component{
        constructor(props)
        {
            super(props)

            this.state = {
                count: 0
            }
        }
        incrementCount = () =>
        {
            this.setState(prevState =>
                {
                    return {count : prevState.count+1}
                })
        }

        render()
        {
            return (
                <OriginalComponent
                    name='Protagonist'
                    // count={this.state.count}
                    // incrementCount={this.incrementCount}
                /> 
              )
        }
    }
    return EnhancedComponent
}

export default WithComponent