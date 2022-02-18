//for swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
   var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


    //for button
    let addBtn = document.querySelector('.add');
    let removeBtn = document.querySelector('.remove');
    let qty = document.querySelector('.qtyBox');
    
    addBtn.addEventListener('click', () => {
        qty.value = parseInt(qty.value) + 1;
        if (qty.value >= 15) {
            qty.value =15;
        }
    });

    removeBtn.addEventListener('click', () => {
        qty.value = parseInt(qty.value) - 1;
        if (qty.value <= 1) {
            qty.value = 1;
        }
    });