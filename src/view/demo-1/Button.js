// 使用 useState 案例
import React, { useState } from "react";

export default function  Button()  {
  const  [number, setNumber] =  useState(0);

  function handleClick()  {
    return setNumber(number + 1);
  }

  return  <button  onClick={handleClick}>{'Click me：' + number}</button>;
}