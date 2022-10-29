class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

  open() {
    this.popup.classList.add('popup_visible');
  }

  close() {
    this.popup.classList.remove('popup_visible');
  }
}

export default Popup;
