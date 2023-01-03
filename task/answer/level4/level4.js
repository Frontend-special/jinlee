/* 
페이지네이션 구현하기
*/

const $pageList = document.querySelector('.page_list');
const $nextPage = document.querySelector('.btn_nav.next');
const $prevPage = document.querySelector('.btn_nav.pre');

let totalPage = 80;
let PAGE_LST = [];
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1; //|| 1 존재이유
console.log(currentPage)
Array.prototype.division = function (div) {
  const arr = this;
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i += div) {
    result.push(arr.slice(i, i + div));
  }
  return result;
};

(function pagaNation(totalPage, currentPage) {
  const paageNation_list = [];
  const paageNation_limit = 10;
  currentPageIndx = Math.ceil(currentPage / paageNation_limit) - 1;
  for (let i = 1; i <= totalPage; i++) {
    paageNation_list.push(i);
  }
  PAGE_LST = paageNation_list.division(paageNation_limit);
  renderPageNation();
})(totalPage, currentPage);

// 페이지네이션 랜더링
function renderPageNation() {
  const pageNationList = PAGE_LST[currentPageIndx];
  $pageList.innerHTML = pageNationList
    .map((page) => {
      return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
    })
    .join('');

  const pageList = document.querySelector('.page_list').children;
  for (let i = 0; i < pageList.length; i++) {
    if (pageList[i].dataset.page == currentPage) {
      pageList[i].classList.add('on');
    }
  }
}

// 넥스트 페이지 그룹
function nextPageGroup() {
  if (!(currentPageIndx < PAGE_LST.length - 1)) return;
  currentPageIndx++;
  renderPageNation();
}

// 이전 페이지 그룹
function prevPageGroup() {
  if (!(currentPageIndx > 0)) return;
  currentPageIndx--;
  renderPageNation();
}

$nextPage.addEventListener('click', nextPageGroup);
$prevPage.addEventListener('click', prevPageGroup);


/*
let PAGE_LST : 화살표 사이에 들어갈 페이지 배열?
*/

/* Array.prototype.division
배열에 프로토타입 메소드 생성? division
메소드사용하는 array this로 받아 함수 내에서 재정의
나눠진 배열이 들어갈 result 배열
선택한 배열의 길이만큰 상수에 반영
0~배열 길이만큼, 지정해준 크기만큼 증가하면서 포문 실행
slice통해 만들어진 rssult 배열에 추가 하고 result리턴
*/

/* pagaNation(totalPage, currentPage)
즉시실행함수
input : totalPage, currentPage (페이지 전체 갯수, url주소 상 page의 값 = 현재 페이지 위치?)
빈 배열 생성, 한 페이지에 표시될 페이지 갯수 리밋은 10
총페이지수 = math.ceil(전체페이지수/한화면에서 보여줄 크기) => math.ceil 올림 80/10 = 8 총 8페이지

for 1~totalpage(80)RKwl 1씩 증가하면서 paageNation_list에 푸쉬


*/



//구글 검색 javascript 전체페이지 묶음으로 나누기 https://lts0606.tistory.com/477
