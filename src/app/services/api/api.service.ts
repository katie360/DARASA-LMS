import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environemnt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }

  Get(endpoint: string, params: any = null): Observable<any> {
    if (params !== null) {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
      return this.httpClient.get(`${this.url}/${endpoint}/`, { params: params, headers: headers });
    }
    else {
      return this.httpClient
        .get(`${this.url}/${endpoint}/`)
    }
  }

  GetSingle(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.url}/${endpoint}`);
  }

  Post(endpoint: string, entity: any) {
    return this.httpClient.post(`${this.url}/${endpoint}`, entity, { headers: this.httpOptions.headers });
  }

  Put(endpoint: string, entity: any) {
    return this.httpClient.put(`${this.url}/${endpoint}`, entity, { headers: this.httpOptions.headers });
  }

  Delete(endpoint: string, ID: any) {
    return this.httpClient.delete(`${this.url}/${endpoint}/${ID}`);
  }
}
