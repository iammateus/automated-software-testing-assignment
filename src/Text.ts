export default class Text {
    body: string;

    constructor(body: string) {
        this.body = body;
    }

    public isPalindrome(): boolean {
        const clearBody = Text.clean(this.body);

        const firstHalf = Text.getFirstHalf(clearBody);
        const secondHalf = Text.getSecondHalf(clearBody);
        const invertedSecondHalf = Text.invert(secondHalf);

        return firstHalf === invertedSecondHalf;
    }

    private static clean(text: string): string {
        const result = text.toLowerCase();
        const cleanAllSpacesAndNonAlphanumericCharsRegex = /[^0-9a-z]/gi;
        return result.replace(cleanAllSpacesAndNonAlphanumericCharsRegex, '');
    }

    private static getFirstHalf(text: string): string {
        const middle = Math.floor(text.length / 2);
        return text.substr(0, middle);
    }

    private static getSecondHalf(text: string): string {
        const middle = Math.floor(text.length / 2);
        const remainder = text.length % 2;
        return text.substr(middle + remainder, middle);
    }

    private static invert(text: string): string {
        return text.split('').reverse().join('');
    }
}
