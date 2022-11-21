import { HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { routing,appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CubosService } from './services/cubos.service';
import { MenuComponent } from './components/menu/menu.component';
import { DetallescubosComponent } from './components/detallescubos/detallescubos.component';
import { ComentarioscuboComponent } from './components/comentarioscubo/comentarioscubo.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { ComprasusuarioComponent } from './components/comprasusuario/comprasusuario.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetallescubosComponent,
    ComentarioscuboComponent,
    LoginComponent,
    PerfilusuarioComponent,
    ComprasusuarioComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,routing
  ],
  providers: [appRoutingProviders,CubosService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
