import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CubosService } from 'src/app/services/cubos.service';
import { Cubo } from 'src/app/models/cubo';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("pedidoboton") pedidoboton!:ElementRef

  public cubos!:Array<Cubo>
  public pedido!:number

  constructor(
    private _servcie:LoginService,
    private _servcie2:CubosService,
    private _router: Router
  ) { }

  cargarCubos():void{
    this._servcie2.getCubos().subscribe(response=>{
      this.cubos=response
    })
  }
  hacerPeido():void{
    var id = parseInt(this.pedidoboton.nativeElement.value);
      this._servcie.hacerPedido(id).subscribe(response=>{
        this.pedido=response
        console.log(this.pedido)
        this._router.navigate(["/compras"]);
      })
  }

  ngOnInit(): void {
    this.cargarCubos();
  }

}
