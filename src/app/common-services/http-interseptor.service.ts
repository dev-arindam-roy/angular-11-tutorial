import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url != 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwzax0b4mr_Z-2-mM0eC2pnKZK7obsgBQ' && req.url != 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwzax0b4mr_Z-2-mM0eC2pnKZK7obsgBQ') {
      let modifyReq = req.clone({
        headers: req.headers.append('demo-header', 'DEMO').append('demo-header2', 'DEMO2'),
        params: req.params.append('x', '12').append('y', '20')
      });
      console.log('REQUEST::' + req.url);
      //return next.handle(req);
      return next.handle(modifyReq);
    }
    return next.handle(req);
  }
}
