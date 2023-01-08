/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진
 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 
요소로 갖는 배열을 반환한다

// arr = [1,2,3,4,5]
// divition(arr, 2); === [ [1,2], [3,4], [5] ]

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

1. 배열을 원하는 갯수의 길이로 나눈 후 배열로 반환
2. 나눠질 배열, 나눌 원소갯수
3. function input = arr, num output = dividedArr
   dividedArr = arr/num & rest
4. 원하는 갯수만큼 배열을 쪼개는 배열메소드. 배열 반환하는 방법

자바스크립트 배열 원하는 크기로 나누기 
(https://gurtn.tistory.com/174)
*/

let arr = [1,2,3,4,5,6,7,8,9,10,11]
function division(arr, size) {
 const res = [];

 for(i=0; i<arr.length; i+=size){
   res.push(arr.splice(i,i+size));
   
 }
console.log(res);
}

division(arr, 5);

