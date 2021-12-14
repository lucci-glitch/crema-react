export default class ChatBotEngine {
    constructor() {
        this.chatState = "question";
    }

    getMessageCategory() {
        let category = "";

        if (this.chatState === "question") {
            category = "question";
            this.chatState = "statement";
        } else {
            category = "statement";
        }
        return category;
    }
}
