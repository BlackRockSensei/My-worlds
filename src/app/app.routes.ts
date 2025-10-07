import { Routes } from '@angular/router';
import { InmortalComponent } from './inmortal/inmortal.component';
import { HomeComponent } from './home/home.component';
import { TrecePuertasComponent } from './trece-puertas/trece-puertas.component';
import { SobremiComponent } from './sobremi/sobremi.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'proyecto1', component: InmortalComponent },
    { path: 'proyecto2', component: TrecePuertasComponent },
    { path: 'sobremi', component: SobremiComponent },
];
