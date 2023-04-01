//난이도 (하)

//방법1
function AddScore(arr) {
  arr.sort((num1, num2) => {
    return num1 - num2;
  });
  arr.shift();
  arr.pop();
  console.log(arr);
  let answer = 0;
  for (const a of arr) {
    answer += a;
  }
  return console.log(answer);
}
let a = [100, 70, 80, 90, 10];
AddScore(a);

//난이도 (중)

//방법1
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

//난이도 (상)

//방법1
function Price(num) {
  let price = 1250;
  let b = (num - 10) / 5;

  if (num <= 10) return console.log(`요금 : ${price}원`);
  for (let i = 1; i <= b; i++) {
    price += 100;
  }
  return console.log(`요금 : ${price}원`);
}

function SubwayStation(station) {
  let SubwayStation = [
    "성수",
    "건대입구",
    "구의",
    "강변",
    "잠실나루",
    "잠실",
    "잠실새내",
    "종합운동장",
    "삼성",
    "선릉",
    "역삼",
    "강남",
    "교대",
    "서초",
    "방배",
    "사당",
    "낙성대",
    "서울대입구",
    "봉천",
    "신림",
    "신대방",
    "구로디지털단지",
    "대림",
    "신도림",
    "문래",
    "영등포구청",
    "당산",
    "합정",
    "홍대입구",
    "신촌",
    "이대",
    "아현",
    "충정로",
    "시청",
    "을지로입구",
    "을지로3가",
    "을지로4가",
    "동대문역사문화공원",
    "신당",
    "상왕십리",
    "왕십리",
    "한양대",
    "뚝섬",
  ];
  if (SubwayStation.indexOf(station) === -1) {
    return console.log("존재하지 않는 역입니다.");
  }
  let Yeoksam = 0;
  let $Station = 0;
  let Number;
  for (const key of SubwayStation) {
    if (key === "역삼") break;
    Yeoksam++;
  }

  for (const key of SubwayStation) {
    if (key === station) break;
    $Station++;
  }
  if (Yeoksam > $Station) {
    Number = Yeoksam - $Station;
  }
  if (Yeoksam < $Station) {
    Number = $Station - Yeoksam;
  }
  return Price(Number);
}

SubwayStation("뚝섬");

//방법2
const arr = [
  "성수",
  "건대입구",
  "구의",
  "강변",
  "잠실나루",
  "잠실",
  "잠실새내",
  "종합운동장",
  "삼성",
  "선릉",
  "역삼",
  "강남",
  "교대",
  "서초",
  "방배",
  "사당",
  "낙성대",
  "서울대입구",
  "봉천",
  "신림",
  "신대방",
  "구로디지털단지",
  "대림",
  "신도림",
  "문래",
  "영등포구청",
  "당산",
  "합정",
  "홍대입구",
  "신촌",
  "이대",
  "아현",
  "충정로",
  "시청",
  "을지로입구",
  "을지로3가",
  "을지로4가",
  "동대문역사문화공원",
  "신당",
  "상왕십리",
  "왕십리",
  "한양대",
  "뚝섬",
];

function subway(station) {
  let length = arr.indexOf(station) - arr.indexOf("역삼");
  if (length < 0) {
    length * -1;
  }
  let price = 1250;

  if (length >= 35) {
    console.log(price + 500);
  } else if (length >= 30) {
    console.log(price + 400);
  } else if (length >= 25) {
    console.log(price + 300);
  } else if (length >= 20) {
    console.log(price + 200);
  } else if (length >= 15) {
    console.log(price + 100);
  } else {
    console.log(price);
  }
}

console.log(subway("뚝섬"));
