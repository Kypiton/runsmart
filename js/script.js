let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[currentSlide].style.display = 'block';
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.catalog__tabs button');
  const contents = document.querySelectorAll('div.catalog__content');
  const buttons = document.querySelectorAll('.catalog .btn');
  const order__close = document.getElementById('order__close');
  const buyElement = document.querySelector('.buy');
  const orderElement = document.querySelector('.order');
  const orderForm = document.getElementById('orderForm');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (orderElement) {
        orderElement.style.display = 'block';
      }
    });
  });

  orderForm.addEventListener('submit', e => {
    const isFormValid =
      nameInput.value.trim() && phoneInput.value.trim() && emailInput.value.trim();

    if (isFormValid) {
      e.preventDefault();
      orderElement.style.display = 'none';
      buyElement.style.display = 'block';
      setTimeout(() => {
        buyElement.style.display = 'none';
      }, 3000);
    }
  });

  order__close.addEventListener('click', () => {
    if (orderElement) {
      orderElement.style.display = 'none';
    }
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach(content => (content.style.display = 'none'));
      if (index === 0) {
        contents[0].style.display = 'block';
        contents[1].style.display = 'block';
        contents[2].style.display = 'block';
        contents[3].style.display = 'block';
        contents[4].style.display = 'block';
        contents[5].style.display = 'block';
      } else if (index === 1) {
        contents[0].style.display = 'block';
        contents[1].style.display = 'block';
      } else if (index === 2) {
        contents[3].style.display = 'block';
      }
    });
  });

  function toggleCatalogContent() {
    const catalogContents = document.querySelectorAll('.catalog__content');

    catalogContents.forEach(content => {
      const detailsButton = content.querySelector('.catalog__btn:not(.back)');
      const backButton = content.querySelector('.catalog__btn.back');
      const mainContent = content.querySelector('div:not(.catalog__watch-info)');
      const watchInfo = content.querySelector('.catalog__watch-info');

      if (detailsButton && backButton && mainContent && watchInfo) {
        detailsButton.addEventListener('click', e => {
          e.preventDefault();
          mainContent.style.display = 'none';
          watchInfo.style.display = 'block';
        });

        backButton.addEventListener('click', e => {
          e.preventDefault();
          mainContent.style.display = 'block';
          watchInfo.style.display = 'none';
        });
      }
    });
  }

  toggleCatalogContent();

  tabs[0].click();
});
