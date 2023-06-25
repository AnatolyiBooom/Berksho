let accordions = document.querySelectorAll('.questions__faq');

accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    let self = e.currentTarget;
    self.classList.toggle('questions__faq--open');
  });
});


// let body = document.querySelector('body');
// let burger = document.querySelector('.header__menu-btn');
// let nav = document.querySelector('.header__nav');
// let link = document.querySelectorAll('.header__link')

// burger.addEventListener('click', function() {
//   burger.classList.toggle('burger-active');
//   nav.classList.toggle('header__nav-active');
// });

// link.forEach(el => {
//   el.addEventListener('click', () => {
//   burger?.classList.remove('burger-active');
//   nav?.classList.remove('header__nav-active');
//       });
//   });

