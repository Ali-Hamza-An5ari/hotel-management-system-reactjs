import React from 'react'
import { Button, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

function MenuCard({menuData} ) {
    //console.log(menuData);
  return (
    <>
        <section className="main-card--cointainer">
        {
            menuData.map((curElement) => {
                const {id, name, category, image, price, description} = curElement;
                return(  
                    <>           
                        <div className="card-container">
                            <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{id}</span>
                                <span className="card-author subtle">{category}</span>
                                <h2 className="card-title">{name}</h2>
                                <span className="card-description subtle">
                                {description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} className="card-media"/>
                            {/* <Space size={30}> */}
                                {/* <span > */}

                                {/* <Button.Group > */}
                                {/* <div className="btn-container">
                                     <Space size={30}>
                                        <Button onClick={()=>{}}  danger size="large"  style={{fontSize: 20}}>PKR: {price}</Button>
                                        <Button onClick={()=>{}} type="primary" size="large"  style={{fontSize: 20}}>Order Now</Button>    
                                    </Space>
                                </div> */}
                                   

                                {/* </Button.Group> */}
                                {/* </span> */}
                            {/* </Space> */}
                            {/* <span className="card-tag">order Now</span> */}
                            </div>
                            {/* <h1>Restaurant</h1> */}
                        </div>
                    </>
                )
            })
        }
        </section>
        
    </>
  )
}

export default MenuCard
