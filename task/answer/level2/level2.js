import { RESERVATION_LIST } from './reservation .js';
/*
예약 고객 확인하기
*/

const $userNameInput = document.querySelector(["[name='user-name']"]);
const $userPhonInput = document.querySelector(["[name='user-phone']"]);
const $form = document.querySelector('form');
const $reservation = document.querySelector('#reservation-number');

function NodeUserListInReservationList() {
  alert('일치하는 내역이 없습니다');
  $reservation.innerHTML = '일치하는 내역이 없습니다';
}

$userPhonInput.addEventListener('input', (e) => {
  const phone = e.target.value;
  const hiepnPhone = phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');
  e.target.value = hiepnPhone;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = $userNameInput.value;
  const userPhone = $userPhonInput.value;

  const sameNameUser = RESERVATION_LIST.filter((list) => list.name === userName);
  if (sameNameUser.length === 0) return NodeUserListInReservationList();

  const targetUser = sameNameUser.find((list) => list.phone === userPhone);
  if (!targetUser) return NodeUserListInReservationList();
  $reservation.innerHTML = targetUser.number;
});


/*
일치하는 내역이 없을 경우 알럿 및 내역에 반환시켜야 하는 에러처리를 함수로 따로 뺌
input box에 값 입력 시 실행할 정규 표현식 키보드 액션이 아닌 이벤트리스트 input으로 처리
  -> 키 업 등의 키보드 이벤트로 사용했다면 문자입력은 방지했어도 포맷 자동변환은 안되었을 듯
input 박스의 밸류를 변수에 따로 넣음으로써 함수 안에 변수명으로 인한 가독성 저하 해결
이름에서 1차로 필터 적용하고 만약 없다면 에러처리
1차로 걸러진 필터에서 find통해 폰번호가 일치하는 타겟 유저 검색 없다면 에러처리
타겟유저의 예약번호 innerHTML에 추가
*/

/*
메서드 체인?? phone.replace  조건 3가지?
const hiepnPhone = phone
    .replace(/[^0-9]/g, '') => 정규표현식 숫자 외의 값은 빈 값으로 대체

    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, ''); => 3,4,4개로 숫자 자르고 그 사이 -추가하는 정규 표현식?

*/

/*
구글링 키워드
1. input box에 숫자만 입력가능한 정규표현식
2. 숫자 사이에 원하는 문자열 추가하는 정규표현식 or input box 입력 시 핸드폰 번호로 자동 변환
3. 배열 안의 프로퍼티값이 일치하는 객체 찾기
4. 프로퍼티 값이 일치하는 객체의 다른 프로퍼티 접근방법
*/