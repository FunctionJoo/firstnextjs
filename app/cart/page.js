import datas from './data.js';
import Hello from './hello';

export default function List() {
  let 장바구니 = [
    {
      name: '톰마토',
      price: 40,
      count: 1,
    },
    {
      name: '감자',
      price: 400,
      count: 12,
    },
    {
      name: '파파프리카',
      price: 124,
      count: 55,
    }
  ]
  return (
    <div>
      <Hello/>
      <h4 className="title">Cart</h4>
      <CartItem 상품={장바구니[0]} />
      <CartItem 상품={장바구니[1]}/>
      <CartItem 상품={장바구니[2]}/>

      <Banner 카드="샘숭카드"/>
      <Banner 카드="롯데카드"/>

      <Buttons/>
      <Buttons color="green"/>
      <Buttons color="#f55"/>
    </div>
  )
}

function Banner(props) {
  return <h5>{props.카드} 결제 행사중</h5>
}

function CartItem(props){
  return (
    <div className="cart-item">
      <p>{props.상품.name} / {datas.age} {datas.user}</p>
      <p>${props.상품.price}</p>
      <p>{props.상품.count}개</p>
    </div>
  )
}

function Buttons(props){
  return <button type='button' style={{backgroundColor: props.color}}>버튼임 ㅎ</button>
}