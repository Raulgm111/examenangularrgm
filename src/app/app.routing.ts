import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { DetallescubosComponent } from "./components/detallescubos/detallescubos.component";
import { ComentarioscuboComponent } from "./components/comentarioscubo/comentarioscubo.component";
import { LoginComponent } from "./components/login/login.component";
import { PerfilusuarioComponent } from "./components/perfilusuario/perfilusuario.component";
import { ComprasusuarioComponent } from "./components/comprasusuario/comprasusuario.component";
import { RegisterComponent } from "./components/register/register.component";
const appRoutes: Routes=[
    {path: "", component: HomeComponent},
    {path: "detalles/:marca", component: DetallescubosComponent},
    {path: "comentarios/:id", component: ComentarioscuboComponent},
    {path: "login", component: LoginComponent},
    {path: "perfil", component: PerfilusuarioComponent},
    {path: "compras", component: ComprasusuarioComponent},
    {path: "register", component: RegisterComponent},
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);