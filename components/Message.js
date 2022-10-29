class Message {
  constructor(componentSelector) {
    this.component =  document.querySelector(componentSelector);
    // this.text = text;
  }

  setMessage = (text) => {
    return this.component.textContent = text
  }

}

export default Message;
