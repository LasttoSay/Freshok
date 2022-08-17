$(function(){
  
  
  const catalog = document.querySelector('.catalog');
  const dropdown = document.querySelector('.catalog');
  dropdown.addEventListener('click', () => {
    catalog.classList.toggle('active');
  });

  $('.slider__content').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    fade: true,
 });
});