export function wrap(length: number, text: string): string {
    if(text == undefined){ // unconditional -> conditional
        return ""; // nil -> constant
    }
    return text.replace(' ','\n') // statemet -> statements
}