class Notes {
  constructor() {
    this.message = [];
  }

  createMessage(text) {
    this.message.push(text);
  }

  displayLastMessage() {
    return this.message[this.message.length - 1];
  }

  displayMessageTitle() {
    return this.message[this.message.length - 1]  .substring(0, 20);
  }
}
