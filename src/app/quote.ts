export class Quote {
    favoriteQuote!: boolean;
    constructor(public quoteInput: string, public author: string, public publisher: string, public postedDate: Date, public upvotes: number = 0, public downvotes: number = 0) {
        this.favoriteQuote = false;
    }
}
