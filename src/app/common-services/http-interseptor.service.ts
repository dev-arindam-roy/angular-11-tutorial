import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifyReq = req.clone({
      headers: req.headers.append('demo-header', 'DEMO').append('demo-header2', 'DEMO2'),
      params: req.params.append('x', '12').append('y', '20')
    });
    console.log('REQUEST::' + req.url);
    //return next.handle(req);
    return next.handle(modifyReq);
  }
}
