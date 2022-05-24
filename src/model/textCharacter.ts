import uniqid from 'uniqid';

export class TextCharacter {
    id: string = "";
    hidden: boolean = true;
    text: string = "";
    /**
     *
     */
    constructor(text:string) {
        this.text = text;
        this.id = uniqid()
    }
    get isBlankSpace() : boolean { 
        return this.text.trim() === "";
    }
}