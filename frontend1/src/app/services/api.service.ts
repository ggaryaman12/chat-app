/**
 * Created by mba-214 on 02/11/18.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class apiService {
    private baseUrl = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }


login(data): Observable<any> {
    const url = `${this.baseUrl}/auth/login`;
    return this.http.post(url, data);
}
 

signup(data): Observable<any> {
    const url = `${this.baseUrl}/auth/signup`;
    return this.http.post(url, data);
}

logout(data): Observable<any> {
    const url = `${this.baseUrl}/auth/logout`;
    return this.http.post(url, data);
}
}
