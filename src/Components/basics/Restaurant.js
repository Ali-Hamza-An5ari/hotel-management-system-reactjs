import React, {useState} from 'react';
import  "./style.css";
import Menu from "./menuAPI";
import MenuCard from './MenuCard';
import Navbar from "./Navbar";

//returns unique list of category. we will map over the Menu because it is our API and will be keep the record whenever it gets updated. If we do with state variable it is updated and sometimes do not takes all the records while we need unique list of all possible categories.  
const uniqueList = [... new Set(Menu.map((curElem) => 
    {
        //return [curElem.category.toLowerCase(),curElem.category]
        return curElem.category.toUpperCase();
    })),
  "ALL"
];
    console.log(uniqueList)

function Restaurant() {
  const[menuData, setMenuData] = useState (Menu); //returns array of two elements state variable and 
  const[menuList, setMenuList] = useState (uniqueList);

  const filterItem = (category) =>{
    if(category === "ALL")
    {
      setMenuData(Menu);
      return;
    }
    else
    {
      const updatedList = Menu.filter((curItem)=>
      {
          return curItem.category.toLowerCase() === category.toLowerCase();
      });
    
      setMenuData(updatedList);
    }
    
}  
  return (
    <>
    {/* <RestaurantNavbar menuData={menuData}/> */}
    {/* <nav className="navbar">
            <div className="btn-group">
                <button
                 className="btn-group__item" 
                 onClick={ ()=>filterItem("breakfast")}>
                   BreakFast
                </button>

                <button
                 className="btn-group__item"
                 onClick={()=>filterItem("lunch")}>
                   Lunch
                </button>
                
                <button
                 className="btn-group__item"
                 onClick={()=>filterItem("evening")}>
                   Evening
                </button>

                <button
                 className="btn-group__item"
                 onClick={()=>filterItem("dinner")}>
                   Dinner
                </button>

                <button
                 className="btn-group__item"
                 onClick={() => setMenuData(Menu)}>
                  All
                </button>

            </div>
        </nav> */}

    <Navbar filterItem={filterItem} menuList={menuList}></Navbar>    
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant