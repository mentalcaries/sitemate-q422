import Popup from '../components/Popup.js';

const mainButton = document.querySelector('#main__click-me');

const confirmationPopup = new Popup(
  '.popup_confirm',
  'Are you sure you want to continue?'
);
confirmationPopup.setEventListeners();

const openPopup = () => {
  confirmationPopup.open();
};

mainButton.addEventListener('click', openPopup);
