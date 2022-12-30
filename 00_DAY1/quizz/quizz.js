import { BANK_LIST, ACCOUNT_FORM } from './mockData.js';
// console.log(BANK_LIST, ACCOUNT_FORM);


//dom 으로 리스트 가져와서 .onclick하면 리스트나오게? 
//select 뭐였지? <option value="dog">Dog</option>
//`<option value="${el}">$listItem[el]</option>`
//계좌는 정규입력으로 구현?
//제출버튼 누르면 리스트 추가는 수업시간에 한 내용 참고
//구글검색해야지 + 수업자료가져와야지
//함수를 쓰나 여기에???


//add childnode!!
//script defer?? type=module?? defer 쓰면 밑에 안써도됨 type=module은 import가 최신 문법이라서 모듈화된거 가져올떄 씀

//변수선언은 언제하는게 좋지?
//목데이터가 왜 따로있지? 여기서 바로 쓸수가 있나? 임포트했으면 가능?

//devops tool에서 속성보는방법 물어보기

const $bankSelectList = document.getElementById('bank-selector');
const $listItem = BANK_LIST; // for문으로 추가

    for (let el in $listItem) {
        const $opt = document.createElement('option');
        const $bankName = $listItem[el];
        $opt.value = el;
        $opt.innerHTML = $bankName; //option의 value & innerHTML
        $bankSelectList.appendChild($opt);
        //선택한 은행의 value 어딘가에 저장 필요한디....
    }

   

//계좌 입력 12자리로 잘라야하고, 은행별에 맞춰서 양식변경해야하고
//서브밋누르면 은행리스트 이름 : 계좌번호로 리스트 추가
const $submitBtn = document.querySelector('#account-send-form button'); //tagname으로 가져올때랑 queryselector 차이?
const $acctList = document.querySelector('#account-list');
const $acctInput = document.querySelector('#account-input')


function addList(e) {
    e.preventDefault();
    const $newAcct = document.createElement('li');
    const $convertedacct = $acctInput.value

    const regex = new RegExp (ACCOUNT_FORM[$bankSelectList.value]);
    console.log(regex);
   
    //현재 선택된 셀렉트의 문자열 가져오는 방법은? 배열말고 있을텐데....
    $newAcct.append(`${BANK_LIST[$bankSelectList.value]}: ${$convertedacct}`);
    $acctList.appendChild($newAcct);
};

$submitBtn.addEventListener('click',addList);
