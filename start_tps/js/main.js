// scroll animation js start

// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
// })

// sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'origin' })
// sr.reveal(`.home__name, .home__info, 
//             .about__container, .section__title-1, .about__info, .contact__social, .contact__data`, { origin: 'left' })

// sr.reveal(`.services__card, .projects__cards`, { origin: '100' })

// // scroll animation js end



// // email javascript

// const contactForm = document.getElementById('contact-form')
// contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) => {
//   e.preventDefault()

//   emailjs.sendForm('service_8t4z5kp', 'template_xfg5w7c', '#contact-form', 'rwEWS9_LLtDo4HN0N')
//     .then(() => {
//       contactMessage.textContent = 'Message Sent Successfully.'

//       setTimeout(() => {
//         contactMessage.textContent = ''
//       }, 5000)

//       contactForm.reset()

//     }), () => {
//       contactMessage.textContent = 'Message Not Sent (Service Error)'
//     }

// }

// contactForm.addEventListener('submit', sendEmail)



// sidebar tas recube js

const mainItems = document.querySelectorAll(
  '.main-item'
);

mainItems.forEach((mainItem) => {
  mainItem.addEventListener('click', () => {
    mainItem.classList.toggle(
      'main-item--open'
    );
  })
});


// pricing module animation js

document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".animate-row");
  rows.forEach(row => row.classList.add("animate-row"));
});

