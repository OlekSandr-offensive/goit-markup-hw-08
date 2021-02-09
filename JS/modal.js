// Модалка

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      backdrop: document.querySelector('[data-backdrop]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.backdrop.classList.toggle('is-hidden');
    }
  })();
  
//  Модалка 2

(() => {
  document
    .querySelector('.js-speaker-form')
    .addEventListener("submit", e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );
    });
})();
  