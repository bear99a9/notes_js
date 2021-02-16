class Notes {
    constructor() {
        this.message = [];
    }

    createMessage(text) {
        this.message.push(text);
    }

    displayLastMessage() {
        return this.message[this.message.length - 1]
        // for(let i = 0; i < this.message.length; i++) {
        //   return this.message[i];
        // }
        // this.message.forEach(function(element){
        //   return element
        // });
    }

}
