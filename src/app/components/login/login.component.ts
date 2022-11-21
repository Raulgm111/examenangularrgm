import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("email") email !: ElementRef;
  @ViewChild("password") password !: ElementRef;

  constructor(
    private _service: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {

    var user = {
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value
    }

    this._service.login(user).subscribe(response => {
      localStorage.setItem("token", response.response);
      console.log(localStorage.getItem("token"));
      this._router.navigate(["/perfil"]);
    });
    
  }

}
