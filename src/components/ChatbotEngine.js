import { MessageObject } from "../models/MessageObject";

const GREETING = "greeting";
const QUESTION = "question";
const STATEMENT = "statement";
export default class ChatBotEngine {
    constructor() {
        this.prevState = null;
        this.currentState = GREETING;
        this.nextState = QUESTION;
    }

    initialize() {
        this.setStates();
        return new MessageObject("Hej! Vad har du för symptom?", "bot")
    }

    setStates() {
        this.prevState = this.currentState;
        this.currentState = this.nextState;
        this.setNextState();
    }

    setNextState() {
        switch (this.curentState) {
            case GREETING:
                this.nextState = QUESTION;
                break;
            case QUESTION:
                this.nextState = STATEMENT;
                break;
            default:
                this.nextState = STATEMENT;
        }
    }

    getMessageCategory() {
        let category = "";

        console.log("chatState before if: ");
        this.logStates();

        if (this.currentState === QUESTION) {
            category = QUESTION;

            this.setStates();
        } else {
            category = STATEMENT;
        }
        return category;
    }

    logStates() {
        console.log("prev: " + this.prevState);
        console.log("cur: " + this.currentState);
        console.log("next: " + this.nextState);
    }
}
