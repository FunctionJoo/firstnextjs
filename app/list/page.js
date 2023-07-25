'use client'

import Image from "next/image"
import food0 from '/public/food/food0.png'
import food1 from '/public/food/food1.png'
import food2 from '/public/food/food2.png'

import { useState } from 'react'

export default function List() {
  let [상품, 상품변경] = useState([
    {
      name: '토마통',
      price: 40,
      count: 1,
    },
    {
      name: '파스타타',
      price: 20,
      count: 5,
    },
    {
      name: '야코넛',
      price: 50,
      count: 21,
    }
  ]);
  let [수량, 수량변경] = useState([0,0,0]);


  let 어레이 = [1,2,55]
  let 뉴어레이 = 어레이.map((data, count) => {
    return [data, count];
  });
  // 지린다 이거

  return (
    <div>
      <h4 className="title">상품목록</h4>

      {/* image 객체 넣는건i를 어떻게 돌릴지 모르겠어서 보류.. */}
      {
        상품.map((data, i)=>{
          return (
            <div className="food" key={i}>
              <img src={`/food/food${i}.png`} className="food-img" />
              <h4>{data.name} : ${data.price}</h4>
              <span style={{display: 'inline-block', width: '30px'}}> {수량[i]} </span>
              <button onClick={()=>{ 
                let copy = [...수량]
                copy[i]++
                수량변경(copy)
              }}>+</button>
              <button onClick={()=>{ 
                let copy = [...수량]
                copy[i]--
                수량변경(copy)
              }}>-</button>
            </div>
          )
        })
      }
    </div>
  )
}
