import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubocomentarios } from 'src/app/models/cubocomentarios';
import { Router,Params,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarioscubo',
  templateUrl: './comentarioscubo.component.html',
  styleUrls: ['./comentarioscubo.component.css']
})
export class ComentarioscuboComponent implements OnInit {
  public cubosC!:Array<Cubocomentarios>

  constructor(private _service:CubosService,
    private _activeRoute:ActivatedRoute,
    private _router:Router
    ) { }

    cargarCuboComentario():void{
      this._activeRoute.params.subscribe((params:Params)=>{
        var id = parseInt(params['id'])
        this._service.getCuboComentario(id).subscribe(response=>{
          this.cubosC=response
          console.log(this.cubosC)
        })
      })
    }
  
  ngOnInit(): void {
    this.cargarCuboComentario()
  }

}
