import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("email") email !: ElementRef;
  @ViewChild("nombre") nombre !: ElementRef;
  @ViewChild("password") password !: ElementRef;
  public idUsuario:0

  constructor(
    private _service: LoginService,
    private _router: Router
  ) { 
    this.idUsuario=0
  }
  register(): void {
    var id=this.idUsuario;
    var email= this.email.nativeElement.value;
    var nombre= this.nombre.nativeElement.value;
    var password= this.password.nativeElement.value;
    var user = new Register(id,email,nombre,password)

    console.log(user)
    this._service.register(user).subscribe(response => {
      this._router.navigate(["/login"]);
    });
    
  }

  ngOnInit(): void {
  }

}
