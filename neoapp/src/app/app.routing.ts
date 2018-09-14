import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { CursosComponent } from './cursos/cursos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { AdministracionComponent } from './administracion/administracion.component'
import { CiudadesComponent } from './ciudades/ciudades.component'

export const appRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'listado', component: ListadoComponent},
    { path: 'calendario', component: CalendarioComponent},
    { path: 'administracion', component: AdministracionComponent},
    { path: 'ciudades', component: CiudadesComponent},
    { path: '**', component: LoginComponent }

]