import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AbrirAgendaComponent } from './pages/abrir-agenda/abrir-agenda.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { Page404Component } from './pages/page404/page404.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'forgot-password/:token', component: ForgotPasswordComponent},
  {path: 'ajuda', component: AboutComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'abrir-agenda', component: AbrirAgendaComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'orcamento', component: OrcamentoComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'servico/:idServico', component: ServicosComponent},
  {path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
