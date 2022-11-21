import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from 'src/app/models/cubo';
import { Router,Params,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallescubos',
  templateUrl: './detallescubos.component.html',
  styleUrls: ['./detallescubos.component.css']
})
export class DetallescubosComponent implements OnInit {
  public cubos!:Array<Cubo>
  constructor(private _service:CubosService,
    private _activeRoute:ActivatedRoute,
    private _router:Router
    ) { }
  
    cargarDetallesMarca():void{
      this._activeRoute.params.subscribe((params:Params)=>{
        var marca = params['marca']
        this._service.getDetallesMarca(marca).subscribe(response=>{
          this.cubos=response
          console.log(this.cubos)
        })
      })
    }
  
  ngOnInit(): void {
    this.cargarDetallesMarca()
  }

}
