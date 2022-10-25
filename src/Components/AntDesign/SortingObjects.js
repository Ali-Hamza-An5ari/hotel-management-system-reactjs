import React, { useState } from 'react'
import { Button, Space } from 'antd';

function SortingObjects({TShirtBrands}) 
{
const [TShirts,setTShirts] = useState(TShirtBrands)

const sortByName = () => {TShirts.sort((a,b)=> (a.name > b.name) ? 1 : -1); setTShirts([...TShirts]);}
const sortByPrice = () => {TShirts.sort((a,b)=> (a.price > b.price) ? 1 : -1); setTShirts([...TShirts])}

  return (
      <>
        <h3>Tshirt brands</h3>
        <ul>
            {
                TShirts.map((tShirt, index) => {
                    return(<li key={index}>{tShirt.name+" -    $"+tShirt.price}</li>)
                })
            }
        </ul>
        <Space size={30}>
            <Button type="primary" size={40}
                onClick={
                    sortByName
                   }
                >Sort by Name</Button>
            <Button type="primary" size={40} 
                onClick={
                    sortByPrice
                }
            >Sort by Price</Button>
        </Space>
      </>
  )
}

export default SortingObjects