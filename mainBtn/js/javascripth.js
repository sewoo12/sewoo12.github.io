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
    slideCount = 0;
  }
});

function toggleImg(text,ab) {
  moveSlide(0);
};

function textChanged(text,text2){
  document.getElementById("hh").innerHTML = text;
  document.getElementById("pp").innerHTML = text2;
  var imgChange = h.keys(h);
  alert(imgChange);
};






$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);



const h = {
  "경복궁" : [
    'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSvMkDFNC5gSUIfX0nOEJ8fn1X0cvLMrwvG5OIZqX4TnCXAe3_IS2iVM7dw6eg8asxJuKNKiZFmC5vahQeOHYOoiw',
    'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTZOaUZacogRDF1gQVXg692lSrBiKHuDtQfqT5Vs5zYkq0r_i4Z2bm0a58jHN2vH4gmWCtrFVYshcrmv2mbieMB5g',
    'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRtq0QmJf6SXWiaBisTMhqBH7ftuKEIlx3nklMxJvMeZlbMIed02JQT7eNzYstanLt-rZbBF3242C9a4gKaFU0IJg',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS9cRR9dfcoWMgoQlqKu2Vlw1UPwVyynvXyG_Wz_W2jTszVUWre2jnNgoFPTHkyJ2uQg20XbHu-a0yRHcbuXpiFIQ'
  ],

  "N서울타워" : [
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdzle413xfrDNuFFWIXCWrKqKDxqwPcE2A-aJsIKdNzMUr_v3mRAgy7e3MdJNLcyiOC6T-Hmzc69E73L8W7HIK1g',
    'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQy452sRM-KgF6DTt_8Xi3APzoMPpQ89nd6jlq0KHjh1StEvlN4kmQ3f0t_pHii7MxGPTiLptn7FeCxM6G3BKrPgw',
    'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTrbXIHexAWGUpEErefCNo_ulqRTuD9DSLH8HBy6Sxy81hvee0qPb-DFZh6knQT5iJht7OQqatwugkyX384sGAZ-Q',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT9sWHM9tHuthy6-okxv2-04Ce2q6jeL5BPEdxf_09sg3UwrTJmhOyIG-GzwO8nciol7V6-7kcpNXX0NOo60JTGdQ'
  ],

  "북촌한옥마을" : [
    'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS_5kcyirpzahzZMJdht7MVluOklPNVt909xseJ3iv_ZdnnZhaCXzE8woMQmd8-bkCukAVRnsqojAirDOGDUEt0Hw',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTIZBE1PqY2LSSgIhogMwZ5aCEaf2kSzhok0-NjzLmzlk3MdOhcXc8Tzr4LIHcQIoCrsxryUFpfqepbL2gvzdoevg',
    'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTMpwvSYWq4KLrT_jXsKRE_ZP-qgbIYCF-bvZMOYcAkEe5x0LHQjPr0_uVPV9x8R4T4R6gC3YMXKAhk3T1H_Gm8lw',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSmJBNeGL5C56m5Uezgr33RKEkRPZg2qfTzBVtkNAgt6C2GiyfmPZDTDaeRZTy3517ZHS34ze57eU-O8Ct697rQYw'
  ],

  "청계천" : [
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4QTUMEfDDhSycezC7MT3LbU1ewympUM_jZtLrV3LcrGbSsRsjd0kcxn060VylxDktHgykGB9eRxLrSlu6-9waCA',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSsWf2r02kbN7fmwOvpm3-9uT6DgAtKnNkYWrBEbYGJ_GKgVcjLRt4TRkLgVtqg9wC_GXjrEOTySKdtwGvyUepYQA',
    'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRho2jjJCtgQmwpZbs1zyBRxneS1TyroOZu3Uyal4MYkDdxvZ9DPsXvTykclJRtgEACY8k9PG_-oK1rNVuCPJTaXw',
    'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR1DtQ4lWZ6TiDaEwmh7k0fPA-OZNsHqYK4Ws3uRoms3NXUhdOxDLaD6r9BpstA9TmTI7zH9i5bKml8yJKC9i4hmA'
  ]
}




