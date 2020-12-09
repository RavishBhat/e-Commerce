import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class sharedService {

    constructor(public http:HttpClient) {}

    getProducts(url): Observable<any> {
        return this.http.get(url);
      }

    //   getProductFeilds(url): Observable<any> {
    //     return this.http.get(url);
    //   }
}