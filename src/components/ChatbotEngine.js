import { MessageObject } from "../models/MessageObject";

const GREETING = "greeting";
const BODYPART = "bodypart";
const TREENODE = "treenode";

export default class ChatBotEngine {
    constructor() {
        this.prevState = null;
        this.currentState = GREETING;
        this.nextState = BODYPART;
    }

    initialize() {
        this.setStates();
        return new MessageObject("Hej! Var har du ont?", "bot")
    }

    backToBody() {
        this.prevState = null;
        this.currentState = GREETING;
        this.nextState = BODYPART;
    }

    setStates() {
        this.prevState = this.currentState;
        this.currentState = this.nextState;
        this.setNextState();
    }

    setNextState() {
        switch (this.currentState) {
            case GREETING:
                this.nextState = BODYPART;
                break;
            case BODYPART:
                this.nextState = TREENODE;
                break;    
            default:
                this.nextState = TREENODE;
        }

    }

    logStates() {
        console.log("prev: " + this.prevState);
        console.log("cur: " + this.currentState);
        console.log("next: " + this.nextState);
    }
}
