export class AuthModel {
    public email: string = '';
    public password: string = '';
    public returnSecureToken: boolean = true;

    constructor(
        email: string,
        password: string,
        returnSecureToken: boolean = true
    ) {
        this.email = email;
        this.password = password;
        this.returnSecureToken = returnSecureToken;
    }
}