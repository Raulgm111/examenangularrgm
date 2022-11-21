import { Component, OnInit } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public marca!:Array<string>
  constructor(
    private _service:CubosService,
    ) { }
  
    cargarMarcaCubos():void{
      this._service.getCuboMarca().subscribe(response=>{
        this.marca=response
      })
    }

  ngOnInit(): void {
    this.cargarMarcaCubos()
  }

}
