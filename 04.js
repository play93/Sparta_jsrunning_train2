1.
//배열 API map 활용
var arr = [10, 20, 30]
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요

for(let i=0; i<arr.length; i++){
      arr[i] = arr[i]*10;
}

console.log(arr);

2.
//배열 API filter 활용
var arr = [10, 22, 33]
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요
 
3.
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]
for(let i=0; i<numbers.length; i++){
      if(numbers[i]>15){
            return numbers;
      }
}

4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요

const numFourUp = arr.filter((word) => word.length >= 4);
console.log(numFourUp);
 
5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요

const wordNum = arr.filter((word) => word.length % 2 === 1);
console.log(wordNum);

6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
const sortNum = arr.sort((a,b) => a-b);
console.log(sortNum);


7.
var student =[
      {name:"이재상", age: 25 },
      {name:"정윤오", age: 30 },
      {name:"김준현", age: 12312}
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요
const studentAge = student.sort((a,b) => b.age-a.age);
console.log(studentAge);


8.
var student =[
      {id : 1, name:"이재상"},
      {id : 2, name:null},
      {id : 3, name:"김준현"}
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
let checkNull = [{name:null}];
console.log(Array.isArray(student, checkNull));

9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요. 
let arrFive = []
for(let i=0; i<arr.length;i++){
      if (arr.indexOf(arr.length) > 5) {
            arrFive.push(arr[i]);
      }
}

10.
var arr = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
let arrNewItem =["apple"]
arr.splice(2,0,...arrNewItem);
console.log(arr);

11.
var arr = [1, 5, -3, 10, 0, 8];
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
for(let i=0; i<arr.length;i++){
      const num = arr[i] >=0 ? "양수":"음수";
      console.log(num); 
};

12.
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
const findNum = arr.filter(num => num<0);
const find = findNum >= 0 ? "모든 숫자가 양수" : "음수가 있음"
console.log(findNum);
console.log(find);