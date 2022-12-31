const musicListData = [
    {
        src: './assets/img/iu_0.jpg',
        color: ['#0272a4', '#f6a564'],
    },
    {
        src: './assets/img/iu_1.jpg',
        color: ['#b6bfc8', '#36595b'],
    },
    {
        src: './assets/img/iu_2.jpg',
        color: ['#e58e82', '#6f569f'],
    },
    
];



let playStatus = 1; //1==f
let currentplayIndex = 0;
const $playList = document.querySelector('.list_btn_group ul');
const $leftArrow = document.querySelector('.list_btn_group button:first-child');
const $rightArrow = document.querySelector('.list_btn_group button:last-child');


$leftArrow.onclick = function () {
    
    currentplayIndex <=0 ? 
    "" : 
    currentplayIndex = currentplayIndex-1;

    $main.style.background = `linear-gradient(120deg, ${musicListData[currentplayIndex].color[0]}, ${musicListData[currentplayIndex].color[1]}`;
}

$rightArrow.onclick = function () {

    currentplayIndex >= musicListData.length - 1 ? 
    "": 
    currentplayIndex = currentplayIndex+1;
    
    $main.style.background = `linear-gradient(120deg, ${musicListData[currentplayIndex].color[0]}, ${musicListData[currentplayIndex].color[1]}`;
    
}

//앨범리스트 앨범이미지로 추가하기
    for (el in musicListData){
        const $li = document.createElement('li');
        const $img = document.createElement('img');
        $img.style.backgroundImage = `url(${musicListData[el].src})`;
        $li.appendChild($img);
        $playList.appendChild($li);
        
    }


//앨범리스트이미지 클릭
const $playitem = document.querySelectorAll('.list_btn_group ul li img')
const $main = document.querySelector('main');

    for (let i=0; i<$playitem.length; i++) {
        $playitem[i].onclick = function (){
        $main.style.background = `linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]}`;
        currentplayIndex = i;
        }

        $playitem[i].onmouseover = function (){
        $playitem[i].classList.add('play');
        }

        $playitem[i].onmouseleave = function (){
        $playitem[i].classList.remove('play');
        }
    
    
    }

//플레이, 스탑버튼
const $innerdisk = document.querySelector('.disk_inner');
const $playbtn = document.querySelector('.play_btn_group button:first-child');
const $stopbtn = document.querySelector('.play_btn_group button:last-child');

    $playbtn.onclick = function (){
        $innerdisk.classList.add('active');
        playStatus = 0; //이거 어디에 쓰지...?
        $main.style.backgroundImage=`url(${musicListData[currentplayIndex].src})`;
    }

    $stopbtn.onclick = function (){
        $innerdisk.classList.remove('active');
        playStatus = 1; //이거 어디에 쓰지...?
        $main.style.background = `linear-gradient(120deg, ${musicListData[currentplayIndex].color[0]}, ${musicListData[currentplayIndex].color[1]}`;
    }


// 요소정리
/*

DONE
1. .list_btn_group > ul
    - li태그의 자식요소로 이미지를 갖고
    - 해당 ul의 자식으로서 추가

2. .list_btn_group > button:first-child
   .list_btn_group > button:last-child
    p.s let currntPlayIndex = 0;
    
4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다
    선택된 노래가 실행되면 앨범 이미지로 바뀐다
    p.s let playStatus = 0(false);

5. .disk
    애니메이션을 추가해야할 disk 태그

6. .play_btn_group > button:first-child
   .play_btn_group > button:last-child
   
   * play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서
   앨범 이미지로 변경 및 디스크 회전

   * 중지 버튼이 눌러지면 디스크 회전 중지 배경 화면
   그라데이션으로

7. 생성된 ul의 li의 이미지태그를 가지고올 것입니다.
   
  * 현재 선택된 노래의 focus
    흰색 테두리 + 크기 커짐
   + 이미지 눌렀을 때도 이동 가능

-----------

3. disk_inner
    선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다. ???어떻게??


*/
