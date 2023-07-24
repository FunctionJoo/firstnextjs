import Image from "next/image"
import food0 from '/public/food/food0.png'
import food1 from '/public/food/food1.png'
import food2 from '/public/food/food2.png'

export default function List() {
  let 상품 = [
    {
      name: '토마통',
      price: 40
    },
    {
      name: '파스타타',
      price: 20
    },
    {
      name: '야코넛',
      price: 50
    }
  ]
  console.log(상품);

  let 어레이 = [1,2,55]
  let 뉴어레이 = 어레이.map((data, count) => {
    return [data, count];
  });
  console.log(뉴어레이);
  // 지린다 이거

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((data, i)=>{
          return (
            <div className="food" key={i}>
              <Image src={food0} className="food-img" />``
              <h4>{data.name} : ${data.price}</h4>
            </div>
          )
        })
      }
    </div>
  )
}
