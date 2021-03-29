export class Quote {
    favoriteQuote!: boolean;
    constructor(public quoteInput: string, public author: string, public publisher: string, public postedDate: Date) {
        this.favoriteQuote = false;
    }
}
