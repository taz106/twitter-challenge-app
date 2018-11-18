import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getTwitts(handleName: string): Observable<any> {
    let params = new HttpParams();

    params = params.append('count', '30');
    params = params.append('tweet_mode', 'extended');
    params = params.append('screen_name', handleName);

    return this.http.get(`${environment.twitterApi}`, {params: params});
  }
}
