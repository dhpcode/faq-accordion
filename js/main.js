// const faqQuestions = document.querySelectorAll('.faq__question');
// const togglerImgList = document.querySelectorAll('.faq__toggler-img');
// const faqAnswer = document.querySelector('.faq__answer');

// togglerImgList.forEach(togglerImg => {
//   togglerImg.addEventListener('click', ()=> {
//     faqAnswer.classList.toggle('faq__answer--open');
//     togglerImg.src = 'images/close-icon.svg'
//   })
// })




const faqList = document.querySelector('.faq__list');

faqList.addEventListener('click', (e) => {
  const questionWrapper = e.target.closest('.faq__question-wrapper');

  // Agar question bosilmagan bo‘lsa — chiqib ket
  if (!questionWrapper) return;

  const item = questionWrapper.closest('.faq__item');
  const answer = item.querySelector('.faq__answer');
  const icon = item.querySelector('.faq__toggler-img');

  const isOpen = answer.classList.contains('faq__answer--open');

  // Hammasini yopish (agar faqat bitta ochiq bo‘lsin desangiz)
  document.querySelectorAll('.faq__answer').forEach(a => {
    a.classList.remove('faq__answer--open');
  });

  document.querySelectorAll('.faq__toggler-img').forEach(img => {
    img.src = 'images/open-icon.svg';
  });

  // Agar yopiq bo‘lsa — ochamiz
  if (!isOpen) {
    answer.classList.add('faq__answer--open');
    icon.src = 'images/close-icon.svg';
  }
});