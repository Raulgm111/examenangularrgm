import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Compra } from "../models/compra";

@Injectable()
export class LoginService{
    constructor(private _http: HttpClient) {}

    login(user: any): Observable<any> {
        var request = "/api/Manage/Login";
        var url = environment.urlApiCubos + request;

        return this._http.post(url, user);
    }

    register(user: any): Observable<any> {
        var request = "/api/Manage/RegistroUsuario";
        var url = environment.urlApiCubos + request;

        return this._http.post(url, user);
    }

    getPerfilusuario():Observable<any>{
        
        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })

        var request="/api/Manage/PerfilUsuario"
        var url=environment.urlApiCubos+request
        return this._http.get(url, {headers: header});
    }

    getCompras():Observable<any>{
        
        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })

        var request="/api/Compra/ComprasUsuario"
        var url=environment.urlApiCubos+request
        return this._http.get(url, {headers: header});
    }

    hacerPedido(id:number):Observable<any>{
        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })
        var request="/api/Compra/InsertarPedido/"+id
        var url=environment.urlApiCubos+request
        return this._http.post(url, "", {headers: header});
    }

}