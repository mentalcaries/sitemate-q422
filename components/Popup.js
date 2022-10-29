class Popup {
  constructor({popupSelector, dialog }, messageRenderer) {
    this.popup = document.querySelector(popupSelector);
    this.popupMessage = dialog;
    this.popupButtons = document.querySelectorAll('.popup__button');
    this.message = document.querySelector('.main__message');
    this.messageRenderer = messageRenderer;
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
    this.popupButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this.messageRenderer(`You have clicked ${button.value}`);
        this.close();
      });
    });
  }
}

export default Popup;
