const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 500; //한개의 슬라이드 넓이
const slideMargin = 100; //슬라이드간의 margin 값



//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 600 + 'px';
  currentIdx = num;
}


prev.addEventListener('click', function () {
  if (currentIdx !== 0) {
    moveSlide(currentIdx - 1);
  }
  else if (currentIdx == 0){
    moveSlide(slideCount-1);
  }
  
});

next.addEventListener('click', function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
  else if (currentIdx === slideCount-1){
    moveSlide(0);
  }
});


// $(".hover").mouseleave(
//   function () {
//     $(this).removeClass("hover");
//   
// );

// 서울 이미지 저작권 : https://www.google.com/travel/things-to-do?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4429192,4597339,4649665,4722900,4723331,4733969,4741665,4757164,4758493,4762561,4778035,4779392,4786153,4786958,4790639,4791207&hl=ko-KR&gl=kr&ssta=1&dest_mid=/m/0hsqf&dest_state_type=main&dest_src=ts&q=서울+관광지&sa=X&ved=2ahUKEwiGsbnD7JD4AhVKmFYBHXbBDCsQuL0BegQIDRA4
// 경기도 이미지 저작권 : 



function toggleImg(text,ab) {
  document.getElementById('img1').src = "../images/"+text+"/"+ab+"1.jpg";
  document.getElementById('img2').src = "../images/"+text+"/"+ab+"2.jpg";
  document.getElementById('img3').src = "../images/"+text+"/"+ab+"3.jpg";
  document.getElementById('img4').src = "../images/"+text+"/"+ab+"4.jpg";
  moveSlide(0);
};

function textChanged(text,text2){
  document.getElementById("hh").innerHTML = text;
  document.getElementById("pp").innerHTML = text2;
};