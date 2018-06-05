
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgModule } from "@angular/core";
import { AddItemComponent } from "./componentes/add-item/add-item.component";
import { LoginappComponent } from "./loginapp/loginapp.component";
import { AuthGuard } from "./guards/auth.guard";
import { ItensComponent } from "./componentes/itens/itens.component";
import { PaginaInicialComponent } from "./componentes/pagina-inicial/pagina-inicial.component";

const APP_ROUTES: Routes = [

  { path: '', redirectTo: 'login-app', pathMatch: 'full' },
  {
    path: 'cadastro-paciente', component: AddItemComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login-app', component: LoginappComponent },
  {
    path: 'lista-paciente', component: ItensComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pagina-inicial', component: PaginaInicialComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
