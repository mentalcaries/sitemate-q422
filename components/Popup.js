class Popup {
  constructor(popupSelector, { dialog }, message) {
    this.popup = document.querySelector(popupSelector);
    this.popupMessage = dialog;
    this.yesButton = this.popup.querySelector('#popup-yes');
    this.cancelButton = this.popup.querySelector('#popup-cancel');
    this.message = document.querySelector('.main__message');
  }

  open = () => {
    const dialogMessage = this.popup.querySelector('.popup__text');
    dialogMessage.textContent = this.popupMessage;
    this.popup.classList.add('popup_visible');
  };

  close = () => {
    this.popup.classList.remove('popup_visible');
  };

  setUserSelection = (option) => {
    return option;
  };

  setEventListeners() {
    this.yesButton.addEventListener('click', () => {
      this.message.textContent = 'You have clicked yes';
      this.close();
    });
    this.cancelButton.addEventListener('click', () => {
      this.message.textContent = 'You have clicked Cancel';
      this.close();
    });
  }
}

export default Popup;
