import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class CubosService{
    constructor(private _http:HttpClient){}

    getCubos():Observable<any>{
        var request="/api/Cubos"
        var url=environment.urlApiCubos+request
        return this._http.get(url)
    }

    getCuboMarca():Observable<any>{
        var request="/api/cubos/marcas"
        var url=environment.urlApiCubos+request
        return this._http.get(url)
    }

    getDetallesMarca(marca:string):Observable<any>{
        var request="/api/Cubos/CubosMarca/"+marca
        var url=environment.urlApiCubos+request
        return this._http.get(url)
    }

    getCuboComentario(id:number):Observable<any>{
        var request="/api/ComentariosCubo/GetComentariosCubo/"+id
        var url=environment.urlApiCubos+request
        return this._http.get(url)
    }
}