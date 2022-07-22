const popupHeader = document.querySelector('.popup__header');
const butonOpenHeader = document.querySelector('.mobil__img');
const popupHeaderWrapper = document.querySelector('.popup-wrapper__header');
const closeHeaderPopup = document.querySelector('.popop-header_btn-close');
const linksHeaderPopup = document.querySelectorAll('.popop-header__links');

/////
const openLoginPopup = document.querySelector('.header__btn');
const popupLogin = document.querySelector('.popup-login');
const popupLoginrWrapper = document.querySelector('.popup-login__wrapper');
const btn = document.querySelector('.popup-login__button-sing');
const registr = document.querySelector('#ws');
const account = document.querySelector('#btns');
account.addEventListener('click', () => {
  openPopup(popupLogin);
  popupLoginrWrapper.classList.add('login_activ');
  createPopup(true);
});

openLoginPopup.addEventListener('click', () => {
  openPopup(popupLogin);
  document.querySelector('.popup-login__input').value = '';
  document.querySelector('.popup-login__input-email').value = '';
  popupLoginrWrapper.classList.add('login_activ');
  createPopup(true);
});

popupLogin.addEventListener('click', (e) => {
  if (e.target == popupLogin) {
    closePopup(popupLogin);
    popupLoginrWrapper.classList.remove('login_activ');
  }
});
function createPopup(isname = false) {
  if (isname == true) {
    const content = 'Log in to your account';
    document.querySelector('.popup-login__footer1').classList.add('activ_login');
    return (
      (document.querySelector('.popup-login__title').textContent = content),
      document.querySelector('.popup-login__button-facebook').classList.remove('activ_login'),
      document.querySelector('.popup-login__button-gogle').classList.remove('activ_login'),
      document.querySelector('.popup-login__lines').classList.remove('activ_login'),
      document.querySelector('.popup-login__registr').classList.remove('activ_login'),
      document.querySelector('.popup-login__wrapper').classList.remove('popp'),
      document.querySelector('.popup-login__footer2').classList.remove('activ_login'),
      document.querySelector('.popup-login__footer1').classList.add('activ_login')
    );
  } else if (isname == false) {
    (content = 'Create account'),
      (document.querySelector('.popup-login__title').textContent = content);
    document.querySelector('.popup-login__button-facebook').classList.add('activ_login');
    document.querySelector('.popup-login__button-gogle').classList.add('activ_login');
    document.querySelector('.popup-login__lines').classList.add('activ_login');
    document.querySelector('.popup-login__registr').classList.add('activ_login');
    document.querySelector('.popup-login__wrapper').classList.add('popp');
    document.querySelector('.popup-login__footer2').classList.add('activ_login');
    document.querySelector('.popup-login__footer1').classList.remove('activ_login');
  }
}

function openPopup(popup) {
  popup.classList.add('activ-popup');
}
function closePopup(popup) {
  popup.classList.remove('activ-popup');
}
function overleyClosePopup(e) {
  if (e.target == popupHeader) {
    closePopup(popupHeader);
    popupHeaderWrapper.classList.remove('activ-popup-wrapper');
  }
}

butonOpenHeader.addEventListener('click', () => {
  openPopup(popupHeader);
  popupHeaderWrapper.classList.add('activ-popup-wrapper');
});
closeHeaderPopup.addEventListener('click', () => {
  closePopup(popupHeader);
  popupHeaderWrapper.classList.remove('activ-popup-wrapper');
});
popupHeader.addEventListener('click', overleyClosePopup);

linksHeaderPopup.forEach((item) => {
  item.addEventListener('click', () => {
    closePopup(popupHeader);
    popupHeaderWrapper.classList.remove('activ-popup-wrapper');
  });
});

const openPopupSing = document.querySelector('#rs');
openPopupSing.addEventListener('click', () => {
  createPopup(false);
});
registr.addEventListener('click', () => createPopup(true));

let inputEmail = document.querySelector('.popup-login__input');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputEmail = document.querySelector('.popup-login__input').value;
  const inputPassword = document.querySelector('.popup-login__input-email').value;
  alert(`Ваш адрес: ${inputEmail} Ваш пароль: ${inputPassword}`);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  if (window.innerWidth <= 1430) {
    let i;
    let slides = document.getElementsByClassName('slaiders');
    let dots = document.getElementsByClassName('destinations__item');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' destinations__item_activ', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' destinations__item_activ';
  }
}

const strLeft = document.querySelector('.destinations__left');
const strRicht = document.querySelector('.destinations__richt');

strRicht.addEventListener('click', () => {
  plusSlides(1);
});
strLeft.addEventListener('click', () => {
  plusSlides(-1);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1330) {
    //open();
  }
  showSlides(1);
});
function open() {
  document.querySelector('.slaider__item2').style.display = 'block';
  document.querySelector('.slaider__item3').style.display = 'block';
  document.querySelector('.slaider__item').style.display = 'block';
}
if (window.innerWidth >= 1330) {
  open();
}
