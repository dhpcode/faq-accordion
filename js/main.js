// const faqList = document.querySelector('.faq__list');

// faqList.addEventListener('click', (e) => {
//   const questionWrapper = e.target.closest('.faq__question-wrapper');

//   // Agar question bosilmagan bo‘lsa — chiqib ket
//   if (!questionWrapper) return;

//   const item = questionWrapper.closest('.faq__item');
//   const answer = item.querySelector('.faq__answer');
//   const icon = item.querySelector('.faq__toggler-img');

//   const isOpen = answer.classList.contains('faq__answer--open');

//   // Hammasini yopish (agar faqat bitta ochiq bo‘lsin desangiz)
//   document.querySelectorAll('.faq__answer').forEach(a => {
//     a.classList.remove('faq__answer--open');
//   });

//   document.querySelectorAll('.faq__toggler-img').forEach(img => {
//     img.src = 'images/open-icon.svg';
//   });

//   // Agar yopiq bo‘lsa — ochamiz
//   if (!isOpen) {
//     answer.classList.add('faq__answer--open');
//     icon.src = 'images/close-icon.svg';
//   }
// });









// beginner version
// beginner version
// beginner version


const questions = document.querySelectorAll('.faq__question-wrapper');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const answer = item.querySelector('.faq__answer');
    const toglleImg = item.querySelector('.faq__toggler-img');

    //javobni ochish va yopish
    answer.classList.toggle('faq__answer--open')


    //ikonkani o'zgartirish

    if(answer.classList.contains('faq__answer--open')) {
      toglleImg.src = 'images/close-icon.svg';
    } else {
      toglleImg.src = 'images/open-icon.svg';
    }
  
  })
})
