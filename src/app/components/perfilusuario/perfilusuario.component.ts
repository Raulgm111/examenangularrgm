import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {
  public usuario!:Usuario
  constructor(private _service: LoginService) { }

  cargarPefil():void{
    this._service.getPerfilusuario().subscribe(response=>{
      this.usuario=response
      console.log(this.usuario)
    })
  }

  ngOnInit(): void {
    this.cargarPefil()
  }

}
