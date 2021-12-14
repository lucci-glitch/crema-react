export default class ChatBotEngine {
    constructor() {
        this.chatState = "greeting";
    }

    initialize() {
        this.chatState = "question";
        return "Hej! Vad har du för symptom?";
    }

    getMessageCategory() {
        let category = "";
        console.log("chatState before if: " + this.chatState);
        if (this.chatState === "question") {
            category = "question";
            this.chatState = "statement";
            console.log("change state to statement, check: " + this.chatState)
        } else {
            category = "statement";
        }
        return category;
    }
}
