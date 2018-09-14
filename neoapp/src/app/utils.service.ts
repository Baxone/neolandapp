import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    baseUrl: any;

    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000';
    }
    getCiudades(ciudad) {
       
        let url = `${this.baseUrl}/api/clases/ciudad/${ciudad}`;
       
        return this.http.get(url).toPromise()
    }

}