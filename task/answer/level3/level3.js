/* 
레시피추가하기
*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $button = document.querySelector('#submit_button');
const $list = document.querySelector('#ingredient-list');
const INGREDIENT_LIST = new Map();

function deleteIngredient(e) {
  if (!e.target.matches('button')) return;
  const $tr = e.target.closest('tr');
  const ingredient = $tr.querySelector('td').textContent;
  $tr.remove();
  INGREDIENT_LIST.delete(ingredient);
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ingredientValue = $ingredient.value;
  const weightValue = $weight.value;
  if (INGREDIENT_LIST.has(ingredientValue)) return alert('이미 존재하는 재료입니다');
  if (!ingredientValue || !weightValue) return alert('입력해주세요');

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  `;

  tr.addEventListener('click', deleteIngredient);
  
  INGREDIENT_LIST.set(ingredientValue, weightValue);
  $table.append(tr);
  $ingredient.value = '';
  $weight.value = '';
});

$button.addEventListener('click', () => {
  if ($list.children.length > 0) $list.innerHTML = '';
  INGREDIENT_LIST.forEach((weight, ingredient) => {
    const li = document.createElement('li');
    li.innerText = `${ingredient} : ${weight}`;
    $list.append(li);
  });
});


/*
form dom api가져온 이유
map객체 사용 이유
*/

/*
target.matches메소드 클릭대상이 버튼이 아닐 경우 이벤트발생 없음
버튼일 경우 클릭대상의 가장 가까운 tr dom api로
그 tr의 td의 텍스트내용 상수에 담기
tr삭제
td의 텍스트 내용과 일치하는 항목 map객체에서 삭제
===> 함수 선언만 완료. 실행시점은??
*/

/*
 에러확인을 form의 서브밋 이벤트 시점으로 잡은 이유는?
 맵 객체 돌면서 중복되는 재료 있는지 검사
 재료, 무게 값 or조건으로 비교 둘 중 하나라도 빈값이면 에러
 문제 없으면 tr추가
 tr안의 html은 td 재료 td 무게 td 삭제버튼

 추가된 tr의 삭제기능 form submit안에 넣은 이유는?
 tr.addEventlistener인데 버튼에서만 클릭이 되는 이유?  => 함수에서 버튼타입인지 아닌지 감별, td의 버튼만 빼올 수 없어서 tr에 이벤트?
 겹치지 않는 재료의 값은 set으로 추가
 테이블에  tr 추가 후 입력 인풋박스 빈 칸으로 설정

*/

/*
리스트에 이미 데이터 있을 경우 추가 데이터 없도록
제출버튼 클릭시 map객체 foreach문으로 순환돌면서 리스트에 추가
*/

/*
구글링키워드
버튼 클릭시 테이블에 행추가하기
테이블 안에 있는 버튼 dom api가져오기
버튼 클릭시 테이블 행삭제하기
테이블 행의 데이터 리스트에 추가하기

*/