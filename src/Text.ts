export default class Text {
    body: string;

    constructor(body: string) {
        this.body = body;
    }

    isPalindrome(): boolean {
        const clearBody = Text.clean(this.body);

        const middle = Math.floor(clearBody.length / 2);
        const remainder = clearBody.length % 2;

        const firstHalf = clearBody.substr(0, middle);
        const secondHalf = clearBody.substr(middle + remainder, middle);
        const invertedSecondHalf = secondHalf.split('').reverse().join('');

        return firstHalf === invertedSecondHalf;
    }

    private static clean(text: string): string {
        let result: string = text.toLowerCase();
        result = result.replace(/[^0-9a-z]/gi, '');
        return result;
    }
}
