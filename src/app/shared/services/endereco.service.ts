import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EnderecoService {
    private api = 'http://localhost:3000/api/v1/enderecos';
    private headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
    };

    constructor(private http: HttpClient) {}

    all(): Observable<any> {
        return this.http.get(`${this.api}/all`, this.headers);
    }

    store(form: any): Observable<any> {
        return this.http.post(`${this.api}/store`, JSON.stringify(form), this.headers);
    }

    show(id: any): Observable<any> {
        return this.http.get(`${this.api}/show/${id}`, this.headers);
    }

    showByCep(cep: any): Observable<any> {
        return this.http.get(`${this.api}/show/cep/${cep}`, this.headers);
    }

    searchByCEP(cep: any): Observable<any> {
        const headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token token=cddc88bb0bef88376f506e0af97820ea'
            })
        };

        return this.http.get(`https://cors-anywhere.herokuapp.com/https://www.cepaberto.com/api/v3/cep?cep=${cep}`, headers)
    }

    update(id: any, form: any): Observable<any> {
        return this.http.put(`${this.api}/update/${id}`, JSON.stringify(form), this.headers);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${this.api}/delete/${id}`, this.headers);
    }
}