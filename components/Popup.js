class Popup {
  constructor({popupSelector, dialogText, renderer}) {
    this.popup = document.querySelector(popupSelector);
    this.popupMessage = dialogText;
    this.popupButtons = document.querySelectorAll('.popup__button');
    this.renderer = renderer;
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
        this.renderer(`You have clicked ${button.value}`);
        this.close();
      });
    });
  }
}

export default Popup;
