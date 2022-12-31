/*
1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기
*/

/* Assignment 1
1. 요구사항 : 페이지 로딩 시 form태그 안의 p태그의 글씨 변경
2. 인풋,아웃풋 : page load, innerHTML
3. 함수설계 : body.onload => $textbox = #display form p.innerHTML 변경
4. 키워드 : js이용 p태그 글씨 변경. 페이지 로드 시 이벤트 실행
*/

/* Assignment 2
1. 요구사항 : 선택한 탭의 배경과 글자색 변경
2. 인풋,아웃풋 : DIV 클릭, DIV backgroudcolor, color 변경
3. 함수설계 : DOM API로 할 경우 다섯개의 탭을 각각 구분해야하나..?
    클릭 시 발생할 이벤트를 함수로 만든 후 div태그에 각각 설정.
    함수츨 호출한 대상을 설정 (this)
    function tabAttrChange(this)
    this.backgroundcolor change
    this.color change
    this제외한 나머지 div배경, 폰트 색 변경
4. 키워드 : 같은 class내 다른 div의 배경색, 폰트색 변경
*/

/* Assignment 3
1. 요구사항 : 클릭한 div내의 innerHTML과 같은 div만 출력
2. 인풋,아웃풋 : div #class 클릭=> (this)의 innerHTML, 
    div #block의 innerHTML의 앞에서 2글자
    일치하지 않을 경우 #block innerHTML="" or 폰트색 흰색으로?
3. 함수설계 : tab_body 안의 class
4. 키워드 :
*/

/* Assignment 4
1. 요구사항 : 숫자가 입력되지 않도록
2. 인풋,아웃풋 : te_input에 키 입력 => 입력 or 에러메지시
3. 함수설계 : te_input에 키도브 눌리면 입력된 값을 정규표현식과 비교해 
    문자면 그대로 두고 숫자면 에러메시지 리턴
    input keyboardaction = 함수명
    함수 (입력된 키보드의 값)
    정규표현식과 비교 ? 숫자면 에러 메시지 : 그냥 둔다
4. 키워드 : 숫자가 입력되지 않는 정규표현식, 키보드 입력시 이벤트 호출 메소드
*/

/* Assignment 5
1. 요구사항 :1. 저장버튼클릭 or 엔터키 입력하면 리스트 추가
           2. 초기화 버튼 클릭 시 리스트 안의 모든 내용 삭제   
2. 인풋,아웃풋 : $inputbox, $submitBtn, $resetBtn, $list
             $submitBtn.onclick => $inputbox add in list
             $resetBtn.onclick => $list clear
3. 함수설계 : $inputbox에 입력된 키보드 값이 엔터이거나 서브밋버튼 클릭시 함수발동
            함수는 createElement(li)후 inputbox의 값을 li에 추가. ul list에 li추가
4. 키워드 : input 박스에 엔터키 입력 감지하는 법
*/

/* Assignment 6
1. 요구사항 : 추가된 내용 수정가능하게 만들기 => 5번에서 list추가시 수정 버튼
2. 인풋,아웃풋 : $inputbox, $submitBtn, $list
            #amendBtn 생성 후 $list에 $inputbox값 추가시 포함
            #amendBtn 클릭 시 같은라인의 li 수정가능한 인풋박스로 변경, 저장, 삭제 버튼 추가
        
3. 함수설계 : 함수 1. 5번 함수에 #amendBtn 추가
            함수 2. #amendBtn 클릭 시 클릭한 this의 li를 인풋박스로 변경, 저장, 삭제 버튼 추가
            함수 3. 함수 2의 저장 버튼 클릭 시 인풋박스에서 리스트 형태로 변환
            함수 4. 함수 2의 삭제 버튼 클릭 시 해당 리스트 삭제
4. 키워드 : list 태그 input태그로 변경 (반대로도)
*/