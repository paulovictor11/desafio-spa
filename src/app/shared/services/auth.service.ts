import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    private cors = 'https://cors-anywhere.herokuapp.com/';
    private api = 'http://localhost:3000/api/v1/auth';
    private headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    login(form: any): Observable<any> {
        return this.http.post(`${this.api}/login`, JSON.stringify(form), this.headers);
    }

    signIn(form: any): Observable<any> {
        return this.http.post(`${this.api}/signup`, JSON.stringify(form), this.headers);
    }
}