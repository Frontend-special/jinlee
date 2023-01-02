/* 
페이지네이션 구현하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

페이지 갯수 나눠서 10개씩 나타나게
클릭하면 페이지 계속 이동해야하고
새로고침해도 마지막 접속한 페이지가 나와야함
css어디에 적용해야하는지 확인할 것
*/

let totalPage = 80;
let currentPageIndx = 0;

