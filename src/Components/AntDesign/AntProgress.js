import React, { useState } from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const AntProgress = () => {
  const [percent,setPercent] = useState(0)

  const increase = () => 
  {
    let newPercent = percent + 5;

    if (newPercent > 100) {
      newPercent = 100;
    }

    setPercent(newPercent);
  }

  const decline = () => 
  {
    let newPercent = percent - 5;

    if (newPercent <0) {
      newPercent = 0;
    }

    setPercent(newPercent);
  }

  return (
    <>
    <h1>Ant Design Progress bar</h1> 
    <Progress type="circle" percent={percent} />
    <br/>
    <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  )
}

export default AntProgress
