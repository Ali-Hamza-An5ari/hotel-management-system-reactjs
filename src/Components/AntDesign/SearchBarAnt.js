import React, { useState } from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';

const flowerList = ["Rose", "Jasmine", "Daffodils", "Sunflower", "Daisy", "Lily"]
//const flowerListToShow = ["Rose", "Jasmine", "Daffodils", "Sunflower", "Daisy", "Lily"];
var flowerToShow = ""

const onSearch = (value) => {
    // if(value != "")
    // {
    //     flowerList.filter((value)=>{
    //     })
    // }
    // else
    // {
    //     flowerListToShow = flowerList;
    // }
};
const checkFlower = (f) => {
    
        if(flowerList.includes(f))
        {
            
        }
    
}
const { Search } = Input;
function SearchBarAnt() {
    //state se hm pure component m data maintain kerte hn or ise dynamically er jaga change krenge or jis jaga display m use hua hoga wahn se auto change hoga or jhan change kerna ho setFlower use krenge.
  const [flower, setFlower] = useState(flowerList)  
  return (
    <>
       <Search placeholder="input search text" 
            onSearch={
                (e) => {
                    if(flowerList.includes(e.target.value))
                    {
                        setFlower([e.target.value])
                    }
                    else{
                        setFlower(["--"])
                    }
                }
            } 
            onChange={(e) => {
                if(e.target.value != "")
                {
                    if(flowerList.includes(e.target.value))
                    {
                        // flowerToShow = e.target.value
                        setFlower([e.target.value])
                    }
                    else{
                        setFlower(["--"])
                    }
                }
                else
                {
                    setFlower(flowerList)
                }
            }}
            
            enterButton
            allowClear
            size="large"
             />

            <ul>
                {
                    flower.map((flower, index) => {
                        return <li key={index}>{flower}</li>
                })}
            </ul> 
    </>
  )
}

export default SearchBarAnt