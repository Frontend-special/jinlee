/* 
레시피 재료 추가하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기


1. 재료명과 무게 입력 후 추가 버튼 클릭하면 아래 테이블에 삭제 버튼과 함께 추가. 
   단, 중복된 재료있다면 에러메시지
   제출 버튼을 클릭하면 아래에 테이블 내용 리스트로 추가
2. 값 입력 = >$ingredient, $weight, 
   추가 버튼 in form id ingredient-form
   추가 버튼 클릭 시 입력될 테이블
   제출 버튼 submit_button
   제출 버튼 클릭 시 입력될 리스트 ingredient-list

3. 함수 1 addIngredient
   함수 실행시킬 곳 : #ingredient-form button.onclick
   $ingredeint가 table 재료 열에 있는 재료라면 에러메시지 반환
   - if table 재료열 전체행 foreach? 자신의 내부에서 반복문을 실행 배열을 순회하면서 해야할 일을 콜백함수로 전달받아 반복호출
   $ingredient, $weight, button table에 tr로 추가
   - createElement tr, append 3개 한 줄로

   함수 2 addList
   함수 실행시킬 곳 : #submit_button.onclick
   table의 tr 재료, 무게 #ingredient-list에 li로 추가
   - createElement li, append tr 전체 tr 추가해야하므로 for문으로 tr행 갯수만큼

4. 함수 1
   table의 특정 열의 전체 행 가져와서 1:1 비교하는 방법
   tr 생성 후 추가하는 방법 => innerHTML 
   함수 2
   table의 행 데이터 가져오는 방법

   구글링키워드
javascript  테이블안에 삭제버튼 클릭시 행 삭제 (https://im-developer.tistory.com/46)
버튼 클릭시 테이블에 행추가하기
버튼 클릭시 테이블 행삭제하기
테이블 행의 데이터 리스트에 추가하기
*/


const $ingredient = document.querySelector('[name="ingredient"]')
const $weight = document.querySelector('[name="weight"]')
const $addBtn = document.querySelector('form button')
const $table = document.querySelector("table")
const $list = document.querySelector("#ingredient-list")
const $submitBtn = document.querySelector("#submit_button")

   $addBtn.onclick = function(e) {
      e.preventDefault(e);
      
      
      let row = document.createElement("tr");
      row.innerHTML = `<td>${$ingredient.value}</td>
      <td>${$weight.value}</td>
      <td><button>Delete</button></td>`;
      $table.append(row);
      
      $ingredient.value='';
      $weight.value='';
   };

   $submitBtn.onclick = function (){
         $list.innerHTML='';
         for (let i=1; i<$table.rows.length; i++) {

            let objCells = $table.rows.item(i).cells;

            const li = document.createElement('li');
            li.innerHTML=`재료 : ${objCells[0].innerText} 무게 : ${objCells[1].innerHTML}`;
            $list.append(li);
         }
   };