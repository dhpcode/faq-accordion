const faqQuestions = document.querySelectorAll('.faq__question');
const togglerImgList = document.querySelectorAll('.faq__toggler-img');
const faqAnswer = document.querySelector('.faq__answer');

togglerImgList.forEach(togglerImg => {
  togglerImg.addEventListener('click', ()=> {
    faqAnswer.classList.toggle('faq__answer--open');
  })
})