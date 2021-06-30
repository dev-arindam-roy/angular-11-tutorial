import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private http: HttpClient) { }

  fetchPost() {
    let serachParam = new HttpParams();
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
    
    let serachParam = new HttpParams();
    serachParam = serachParam.append('ami', 'arindam');
    serachParam = serachParam.append('isDev', 'true');
    serachParam = serachParam.append('skill', 'angular');

    return this.http.post('https://angular-001-d31a4-default-rtdb.firebaseio.com/posts.json', postData, {
      headers: new HttpHeaders({
        'onex-id': 'ONEX-0009',
        'onex-key': 'asd76576asbd76asbdas6d6as67asd'
      }),
      //params: serachParam
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
