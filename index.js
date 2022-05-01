window.addEventListener('load',()=>{
    setTimeout(()=>{
        document.querySelector('.modal').classList.add('open');
    },1000);
});

document.querySelectorAll('.input-wrapper input').forEach(function(selectedInput){
    selectedInput.addEventListener('focus' , (event)=>{
        event.target.closest(".input-wrapper").classList.add('hover');
    },true);
    selectedInput.addEventListener('focusout' , (event)=>{
        console.log(event.target)
        if(event.target.value === "")
            event.target.closest(".input-wrapper").classList.remove('hover');
    },true);
});

var mySwiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    speed: 800,
    coverflowEffect: {
        rotate: 60,
        stretch: 10,
        depth: 150,
        modifier: 2,
        slideShadows: false
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
  