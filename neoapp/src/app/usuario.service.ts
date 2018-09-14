import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://10a6fd9b.ngrok.io';
    }
    getUsuarios(formulario) {
        
        let url = `${this.baseUrl}/api/login`;
        console.log(url)
        return this.http.post("http://47ec2907.ngrok.io/api/login", formulario).toPromise()

    }

}