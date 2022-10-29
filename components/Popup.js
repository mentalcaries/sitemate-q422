class Popup {
  constructor(popupSelector, popupMessage) {
    this.popup = document.querySelector(popupSelector);
    this.popupMessage = popupMessage;
    this.yesButton = this.popup.querySelector('#popup-yes');
    this.cancelButton = this.popup.querySelector('#popup-cancel');
  }

  open = () => {
    const dialogMessage = this.popup.querySelector('.popup__text');
    dialogMessage.textContent = this.popupMessage;
    this.popup.classList.add('popup_visible');
  };

  close = () => {
    this.popup.classList.remove('popup_visible');
  };

  setEventListeners() {
    this.yesButton.addEventListener('click', this.close);
    this.cancelButton.addEventListener('click', this.close);
  }
}

export default Popup;
