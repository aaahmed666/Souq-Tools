
//for scroll to top
let i = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 500) {
    i.classList.add("show");
  } else {
    i.classList.remove("show");
  }
};

i.onclick = function () {
  window.scrollTo ({
    top:0,
    behavior:"smooth",
  });
};

// for swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
$(document).ready(function(){
  //for search 
  $('.show-popup').click(function () {
    $('.popup').fadeIn();
});

$('.popup').click(function () {
    $(this).fadeOut();
});

$('.popup .inner').click(function (e) {
    e.stopPropagation();
});

$('.popup .close').click(function (e) {
    e.preventDefault();
    $('.popup').fadeOut();
});

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $('.popup').fadeOut();
    };
});

//for menu
$('.show-popup-1').click(function () {
  $('.popup-1').fadeIn();
});

$('.popup-1').click(function () {
  $(this).fadeOut();
});

$('.popup .inner-1').click(function (e) {
  e.stopPropagation();
});

$('.popup .close-1').click(function (e) {
  e.preventDefault();
  $('.popup-1').fadeOut();
});


//for footer
$('.open-1').click(function (){
  $('.box-1').slideToggle();
});

$('.open-2').click(function (){
  $('.box-2').slideToggle();
});

$('.open-3').click(function (){
  $('.box-3').slideToggle();
});

$('.open-4').click(function (){
  $('.box-4').slideToggle();
});

//foe effect button
$('.btn').hover(function () {
  $(this).find('span').animate({
    width: '100%'
  },300);
}, function() {
  $(this).find('span').animate({
    width: 0
  },300);
});
});
  