import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EscritorioGuard } from './guards/escritorio.guard';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { InicializarTurnosComponent } from './pages/inicializar-turnos/inicializar-turnos.component';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';
import { PublicoComponent } from './pages/publico/publico.component';


const routes: Routes = [
  { path: 'escritorio/:id', component: EscritorioComponent, canActivate: [EscritorioGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'nuevo-turno', component: NuevoTurnoComponent },
  { path: 'inicializar-turnos', component: InicializarTurnosComponent },
  { path: 'publico', component: PublicoComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
