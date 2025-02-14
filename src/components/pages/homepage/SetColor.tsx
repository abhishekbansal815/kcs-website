"use client"

import { ColorContext } from '@/components/context';
import React, { useContext, useEffect } from 'react'

type SetColorProps = {
    color: string
};


const SetColor:React.FC<SetColorProps> = ({
    color
}) => {

  const colorContext = useContext(ColorContext);
  if (!colorContext) {
    throw new Error("ColorContext is null");
  }
  const { setLineColor } = colorContext;    

  useEffect(() => {
    setLineColor(color)
  },[color, setLineColor])

  return React.createElement(React.Fragment, null);
}

export default SetColor