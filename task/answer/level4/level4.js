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

Array.prototype.division = function (div) {
  const arr = this;
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i += div) {
    result.push(arr.slice(i, i + div));
  }
  return result;
};

(function pagaNation(tpage, cpage) {
  const paageNation_list = [];
  const paageNation_limit = 10;
  currentPageIndx = Math.ceil(cpage / paageNation_limit) -1;
  // console.log(cpage, paageNation_limit, cpage / paageNation_limit, Math.ceil(cpage / paageNation_limit))
  for (let i = 1; i <= tpage; i++) {
    paageNation_list.push(i);
  }
  PAGE_LST = paageNation_list.division(paageNation_limit);
  
  // console.log(PAGE_LST, paageNation_list)
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
즉시실행함수 (function 함수명(전달받은인자)(인수전달))
input : totalPage, currentPage (페이지 전체 갯수, url주소 상 page의 값 = 현재 페이지 위치?)
빈 배열 생성, 한 페이지에 표시될 페이지 갯수 리밋은 10

총페이지수 = math.ceil(전체페이지수/한화면에서 보여줄 크기) => math.ceil 올림 80/10 = 8 총 8페이지
cpage=73, p_limit=10, cpage/p_limit = 7.3 => roundup = 8 but -1 =7
1~10 : 0page
11~20 : 1page...
71~80 : 7page
----만약 p_limit = 5?
1/5=0.2 roundup 1 -1 = 0
15/5 = 3 roundup 4 -1 = 3
-----------------------------현재 페이지가 속해야할 구간으르 구한다
 
for 1~totalpage(80)까지 1씩 증가하면서 paageNation_list에 푸쉬
limit수만큼 프로토타입 division 메소드 이용 배열을 묶음 -> 배열? 객체?
renderpagenation 실행
*/


/* renderPageNation
currentPageIndex통해서 구간 반환 후 가로리스트에 넣는데...
구간에 있는 페이지마다 map으로 돌면서...
1page면 1페이지로 a태그, ''join

리스트안 숫자하나씩 돌면서 현재페이지면 on클래스 추가

넥스트 버튼 누르면 발생할 이벤트
현재페이지 인덱스 ++ 렌더 실행

*/


/*구글링 키워드
 javascript 전체페이지 묶음으로 나누기 https://lts0606.tistory.com/477
  js 전체페이지 원하는 갯수만큼 페이지 나누기
  js 페이지 10개단위로 이동
  js 앞,뒤 페이지 이동하면서 주소에 페이지번호 반환
 */




  /*
  1. 요구 사항 
    전체 페이지 갯수를 원하는 갯수의 그룹으로 묶고,
    그룹 내 해당하는 페이지 오픈 시 그 그룹만 페이지 리스트에 노출.
    < >   버튼 클릭시 앞/뒤 페이지 간 이동
    << >> 버튼 클릭시 페이지 그룹 간 이동

  2. 인풋/아웃풋

    필요 요소들
    totalpage = 전체페이지 갯수
    chunksize = 그룹으로 묶고자 하는 페이지 갯수
    indexgroup = 청크사이즈만큼 묶인 리스트 그룹 (0: 1-1#, 1: 1#+1 - 2#)
    pagelist = 화면에 표시될 페이지리스트 번호 클릭시 해당페이지로 이동
    <>버튼 = 클릭 시 페이지 앞뒤로 이동가능한 버튼
    #page = 번호 클릭시 오픈될 각각 페이지

    필요 이벤트
    pagelist내 번호 클릭, <> 버튼 클릭

    input
    totalpage, chunksize, currentpage, event,
    
    output
    indexgroup (index# | 리스트내에 있을 번호들의 집합
                    0 | (i#*chunksize) + 1 - (i#+1)*chunksize / if chunksize = 5, 1 - 5
                    1 | (i#*chunksize) + 1 - (i#+1)*chunksize / if chunksize = 5, 6 - 10
    pagelist 1 2 3 4 5 ... / 6 7 8 ...
    #page  해당 번호에 맞춰 오픈될 웹페이지

  3. 한글 함수 & 구글키워드
    함수 1. 페이지그룹구하기 (전체페이지 갯수 원하는 사이즈로 그릅화)
          주어진 토탈페이지 갯수와 청크사이즈로 인덱스 번호별 페이지 그룹 구하기
          input : totalpage, chunksize / indexgroup [[],[],[]]
    
    함수 2. 선택된 페이지의 위치를 확인하는 함수 (현재 페이지의 주소 확인하는 방법)
          현재 열려있는 페이지의 인덱스 그룹 확인
          input : currentpage / output : 해당페이지의 indexgroup[]
    
    함수 3. 페이지리스트생성 (숫자로된 리스트 생성하면서 페이지별 이동)
          해당 페이지의 인덱스 그룹만 화면에 노출.
          페이지 번호에 a태그 생성. 해당 번호의 웹페이지로 이동
          input : indexgroup / output : pagelist with a tag, #page

    함수 4. 버튼 이벤트 (버튼 클릭시 페이지 앞뒤로 이동, 시작과 끝 이동)
          버튼 클릭시 페이지 번호 앞뒤로 이동
          단, 페이지그룹의 양 끝단 클릭시 페이지 그룹도 이동
          input : buttonevent / output : pagelist with a tag, #page
  

  */