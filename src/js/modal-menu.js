(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMobileMenuBtn: document.querySelector('[data-menu-mobile-close]'),
    closeTableMenuBtn: document.querySelector('[data-menu-table-close]'),

    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelectorAll('[data-modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeMobileMenuBtn.addEventListener('click', toggleModal);
  refs.closeTableMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      refs.modal[1].classList.toggle('is-open');
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      refs.modal[0].classList.toggle('is-open');
    }
  }
})();
