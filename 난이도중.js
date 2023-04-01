// 난이도 (중)

/*
        
        80000원이 넘어가면 10% 할인
        
        let 옷들 = [
        { 이름:드레스, 가격: 40000},
        { 이름: 바지, 가격: 5000},
          ....
       ]  
        input 물건들 (옷들, 개수) 

        리턴 10000원이 넘어가면 10% 할인 or 그냥 그 가격

*/
function calculatePrice(items, quantities) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price * quantities[i];
  }
  if (totalPrice >= 80000) {
    totalPrice *= 0.9;
  }
  return totalPrice;
}
let clothes = [
  { name: "드레스", price: 40000 },
  { name: "바지", price: 5000 },
];
let quantities1 = [2, 3];

let finalPrice = calculatePrice(clothes, quantities1);
console.log(finalPrice);
