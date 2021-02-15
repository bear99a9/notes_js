class Notes {
    constructor() {
        this.message = [];
    }
    createMessage(text) {
        this.message.push(text);
    }
    messages() {
        return this.message[0]
    }
}
