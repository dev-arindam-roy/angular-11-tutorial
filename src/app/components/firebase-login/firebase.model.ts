export class Firebase {

    constructor(
        public email: string,
        public localId: string,
        private _token: string,
        private expiryDate: Date
    ) {

    }

    get token(): string {
        if (new Date() > this.expiryDate) {
            return '';
        }
        return this._token;
    }
}