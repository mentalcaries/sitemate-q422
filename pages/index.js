import Popup from '../components/Popup.js';
import Message from '../components/Message.js';

const mainButton = document.querySelector('#main__click-me');

const mainMessage = new Message('.main__message');

const confirmationPopup = new Popup(
  {
    popupSelector: '.popup_confirm',
    dialogText: 'Are you sure you want to continue?',
    renderer: mainMessage.setMessage
  },
);
confirmationPopup.setEventListeners();

const openPopup = () => {
  confirmationPopup.open();
};

mainButton.addEventListener('click', openPopup);
