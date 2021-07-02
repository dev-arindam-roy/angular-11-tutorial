import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService as FBauthService } from '../components/firebase-login/service/auth.service';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private http: HttpClient, private fbAuthService: FBauthService) { }

  fetchPost() {

    //Run with fire base auth
    // return this.fbAuthService.fbAuthSub.pipe(
    //   take(1), 
    //   switchMap((data) => {
    //     let serachParam = new HttpParams();
    //     let tkn: string = data?.token || '';
    //     serachParam = serachParam.append('auth', tkn);
    //     return this.http.get('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', {
    //       headers: new HttpHeaders({
    //         'onex-id': 'ONEX-0009',
    //         'onex-key': 'asd76576asbd76asbdas6d6as67asd'
    //       }),
    //       params: serachParam
    //     })
    //   }),
    //   pipe(map((response: any) => {
    //     let posts = [];
    //     for (let key in response) {
    //       posts.push({...response[key], key})
    //     }
    //     return posts;
    //   }))
    // );


    //Normal test | without firebase auth
    let serachParam = new HttpParams();
    this.fbAuthService.fbAuthSub.pipe(take(1), map((data) => {
      let tkn: string = data?.token || '';
      serachParam = serachParam.append('auth', tkn);
    }));
    serachParam = serachParam.append('ami', 'arindam');
    serachParam = serachParam.append('isDev', 'true');
    serachParam = serachParam.append('skill', 'angular');

    return this.http.get('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', {
      headers: new HttpHeaders({
        'onex-id': 'ONEX-0009',
        'onex-key': 'asd76576asbd76asbdas6d6as67asd'
      }),
      params: serachParam
    }).pipe(map((response: any) => {
      let posts = [];
      for (let key in response) {
        posts.push({...response[key], key})
      }
      return posts;
    }));
  }

  createPost(postData: any) {
    
    //Run with fire base auth
    // return this.fbAuthService.fbAuthSub.pipe(take(1), switchMap((data) => {
    //   let serachParam = new HttpParams();
    //   let tkn: string = data?.token || '';
    //   serachParam = serachParam.append('auth', tkn);
    //   return this.http.post('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', postData, {
    //     params: serachParam
    //   });
    // }));


    //Normal test | without firebase auth
    let serachParam = new HttpParams();
    serachParam = serachParam.append('ami', 'arindam');
    serachParam = serachParam.append('isDev', 'true');
    serachParam = serachParam.append('skill', 'angular');

    return this.http.post('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', postData, {
      headers: new HttpHeaders({
        'onex-id': 'ONEX-0009',
        'onex-key': 'asd76576asbd76asbdas6d6as67asd'
      }),
      //params: serachParam,
      params: new HttpParams().set('ami', 'ari').set('tumi', 'bal'),
      observe: 'response'
    });
  }

  deletePosts() {
    return this.http.delete('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', {
      headers: new HttpHeaders({
        'onex-id': 'ONEX-0009',
        'onex-key': 'asd76576asbd76asbdas6d6as67asd'
      }),
      //responseType: 'text'
    });
  }
}
