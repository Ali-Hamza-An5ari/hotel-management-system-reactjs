import React from 'react';

import  "./style.css";
function Navbar({filterItem,menuList} ) {
//   const filterItem = (category) =>{
//       const updatedList = menuData.filter((curItem)=>
//       {
//           return curItem.category === category;
//       });
//   }  
  return (
   <>
        <nav className="navbar">
            <div className="btn-group">
            {
                menuList.map((curElem) => 
                {
                    return(
                    <button
                        className="btn-group__item" 
                        onClick={ ()=>filterItem(curElem)}>
                        {curElem}
                    </button>
                    )
                })
            }
            </div>
        </nav>
   </>
  )
}

export default Navbar
