import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/Auth.Guard';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'layout', component:LayoutComponent, canActivate:[AuthGuard], children:
    [
      {path:'main',component:MainComponent, canActivate:[AuthGuard]},
      {path:'buttons',component:ButtonsComponent, canActivate:[AuthGuard]},
      {path:'cards',component:CardsComponent, canActivate:[AuthGuard]}
    ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
