import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService as FBauthService } from '../components/firebase-login/service/auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseTokenInterseptorService implements HttpInterceptor {

  constructor(private http: HttpClientModule, private fbAuthService: FBauthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return this.fbAuthService.fbAuthSub.pipe(
      take(1),
      exhaustMap((data) => {
        if (!data) {
          return next.handle(req);
        }
        let modifyReq = req.clone({
          params: req.params.append('auth', data?.token || '')
        })
        return next.handle(modifyReq);
      })
    )
  }



}
