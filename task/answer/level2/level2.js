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
