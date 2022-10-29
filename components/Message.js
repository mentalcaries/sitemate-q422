class Message {
  constructor(componentSelector) {
    this.component =  document.querySelector(componentSelector);
  }

  setMessage = (text) => {
    return this.component.textContent = text
  }

}

export default Message;
