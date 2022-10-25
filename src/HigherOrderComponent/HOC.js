import React, {Component} from 'react';  
  
 function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            return (  
                <div>  
                    <HocComponent style={{color: "red"}}></HocComponent>  
                </div>  
            );  
        }  
    }   
}  
export default Hoc