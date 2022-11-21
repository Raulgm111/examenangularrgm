import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-comprasusuario',
  templateUrl: './comprasusuario.component.html',
  styleUrls: ['./comprasusuario.component.css']
})
export class ComprasusuarioComponent implements OnInit {
  public compra!:Array<Compra>
  constructor(private _service: LoginService) { }

  cargarCompra():void{
    this._service.getCompras().subscribe(response=>{
      this.compra=response
      console.log(this.compra)
    })
  }

  ngOnInit(): void {
    this.cargarCompra()
  }

}
