import { RESERVATION_LIST } from './reservation .js';
// console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기


1. form > p id=reservation-number에 예약번호 출력
2. $name = input name="user-name", $phone = input name="user-phone".value
   고객 이름, 전화번호 변수에 담기

3. "예약번호 확인"버튼 클릭하면
    >> 배열 안에 있는 객체의 값 검사. 배열 메소드
    $name == RESERVATION_LIST : 입력한 이름과 RESERVATION_LIST 모든 객체의 name키 값과 비교
    없으면 에러문 1 리턴
    $phone == RESERVATION_LIST: 입력한 번호가 RESERVATION_LIST 모든 객체의 phone키 값과 비교
    없으면 에러문 2 리턴
    >> 배열 안에 객체의 키값 접근 후 값 비교
    $name && $phone : false면 에러문 3 리턴

    두 가지 모두 만족 하면 RESERVATION_LIST number 리턴
        에러문
        1. 이름이 없을 때 '존재하지 않는 이름입니다'
        2. 전화번호가 없을 떄 '없는 번호 입니다'
        3. 이름과 전화번호가 일치하지 않을 때 '예약자명과 번호가 일치하지 않습니다'

4. input name dom api 가져오기, 객체가 있는 배열에서 특정값 찾기
*/

// const $userName = document.getElementsByName("user-name") //nodelist로 반환? 쿼리셀렉터와 무슨차이?
const $userName2 = document.querySelector("[name='user-name']") //3번과 같은 결과값 반환, 사용목적?
// const $userName3 = document.querySelector("form>p:first-child>input") // form p:first or form>p:first 둘의 차이는?
const $phoneNo = document.querySelector("[name='user-phone']")
const $resultList = document.querySelector("#reservation-number")
const $chkBtn = document.querySelector("form >button")

$chkBtn.addEventListener('click',resevationChk) //.onclick & .addEventListner 둘의 차이 및 사용하기 위해서는?



function resevationChk(e) { //e 들어가는이유?
    e.preventDefault(); //이걸 안쓰는 경우?
    
        const resName = RESERVATION_LIST.filter(function(el){
            return el.name === $userName2.value;
        });
        const resPhone = RESERVATION_LIST.filter(function(el){
            return el.phone === $phoneNo.value;
        });
        const result = RESERVATION_LIST.filter(function(el){
            return el.name === $userName2.value && el.phone===$phoneNo.value 
        });

        if(resName == "") return $resultList.innerHTML = errChk[101]
        if(resPhone == "") return $resultList.innerHTML = errChk[102]
        if(result=="") return $resultList.innerHTML = errChk[103]
        $resultList.innerHTML = result[0].number;
        
}

const errChk = {
    101 : "존재하지 않는 이름입니다",
    102 : "없는 번호입니다",
    103 : "일치하는 내역이 없습니다"

};
