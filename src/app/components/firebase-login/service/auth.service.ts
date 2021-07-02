import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { Firebase as FirebaseModel } from '../firebase.model';
import { Router } from '@angular/router';

export interface signUpResponseInterface {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string
}

export interface signInResponseInterface {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fbApiKey = 'AIzaSyDwzax0b4mr_Z-2-mM0eC2pnKZK7obsgBQ';
  //fbAuthSub = new Subject<FirebaseModel>();
  fbAuthSub = new BehaviorSubject<FirebaseModel | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string) {
    return this.http.post<signUpResponseInterface>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.fbApiKey}`,
      {email, password, returnSecureToken: true}
    ).pipe(catchError(this.httpErrorHandeler), tap(this.handelAuthSignupResponseData.bind(this)));
  }

  signIn(email: string, password: string) {
    return this.http.post<signInResponseInterface>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.fbApiKey}`,
      {email, password, returnSecureToken: true}
    ).pipe(catchError(this.httpErrorHandeler), tap(this.handelAuthSigninResponseData.bind(this)));
  }

  private handelAuthSigninResponseData(response: signInResponseInterface) {
    const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
    const fbModel = new FirebaseModel(response.email, response.localId, response.idToken, expDate);
    this.fbAuthSub.next(fbModel);
    localStorage.setItem("angFBauth", JSON.stringify(fbModel));
  }

  private handelAuthSignupResponseData(response: signUpResponseInterface) {
    const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
    const fbModel = new FirebaseModel(response.email, response.localId, response.idToken, expDate);
    this.fbAuthSub.next(fbModel);
    localStorage.setItem("angFBauth", JSON.stringify(fbModel));
  }

  httpErrorHandeler(errorResp: HttpErrorResponse) {
    let errMsg = 'Something went wrong!';
    if (errorResp.error.error && errorResp.error.error.message) {
      errMsg = errorResp.error.error.message;
    }
    return throwError(errMsg);
  }

  logout() {
    this.fbAuthSub.next(null);
    this.router.navigate(['/']);
    localStorage.removeItem("angFBauth");
  }

  autoLogin() {
    let localStorageData: {email: string, localId: string, _token: string, expiryDate: string} = JSON.parse(localStorage.getItem("angFBauth") || '');
    if (!localStorageData) {
      return;
    }

    let fbAuthData = new FirebaseModel(
      localStorageData.email,
      localStorageData.localId,
      localStorageData._token,
      new Date(localStorageData.expiryDate),
    );

    if (fbAuthData.token) {
      this.fbAuthSub.next(fbAuthData);
    }
  }
}
