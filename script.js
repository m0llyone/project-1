// let burger = document.querySelector('.header__burger')
// let menu = document.querySelector('.header__burger-list')
// burger.addEventListener('click', function (){
//   document.body.classList.toggle('lock')
//   burger.classList.toggle('active')
//   menu.classList.toggle('active')
// })


$(document).ready(function() {
  $('.header__burger').click(function(event){
    $('.header__burger,.header__burger-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});