class Notes {
  constructor() {
    this.message = [];
    this.title = [];
  }

  createMessage(text) {
    this.message.push(text);
    this.title.push(text.substring(0, 20));
  }

  displayLastMessage() {
    return this.title[this.title.length - 1];
  }

  displayMessageTitle() {
    return this.title;
  }


  // new function that display saved message titles some sort of iteration over array
}
