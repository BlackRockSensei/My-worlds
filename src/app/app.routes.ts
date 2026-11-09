import { Routes } from '@angular/router';
import { InmortalComponent } from './inmortal/inmortal.component';
import { HomeComponent } from './home/home.component';
import { TrecePuertasComponent } from './trece-puertas/trece-puertas.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { AzalonComponent } from './azalon/azalon.component';

const AUTHOR = 'Javier Pérez Palomino';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: `Mis Mundos | ${AUTHOR}`,
        data: { description: `Los mundos de fantasía de ${AUTHOR}: Inmortal, Las Trece Puertas y Azalon.` },
    },
    {
        path: 'inmortal',
        component: InmortalComponent,
        title: `Inmortal | ${AUTHOR}`,
        data: { description: 'En un mundo sin nombre nacen los hijos de la sangre, cuya bendición es la inmortalidad. Descubre Inmortal, de Javier Pérez Palomino.' },
    },
    {
        path: 'las-trece-puertas',
        component: TrecePuertasComponent,
        title: `Las Trece Puertas | ${AUTHOR}`,
        data: { description: 'Un mundo misterioso donde las puertas cierran mundos completos y esconden secretos ancestrales que cambiaron la historia.' },
    },
    {
        path: 'azalon',
        component: AzalonComponent,
        title: `Azalon | ${AUTHOR}`,
        data: { description: 'Arrancado de la Tierra, un joven despierta en un reino de magia y guerra civil y emprende la búsqueda de su amiga Yem. Descubre Azalon, de Javier Pérez Palomino.' },
    },
    {
        path: 'sobremi',
        component: SobremiComponent,
        title: `Sobre mí | ${AUTHOR}`,
        data: { description: `Conoce a ${AUTHOR}, escritor de fantasía, magia y aventura.` },
    },
    // Direcciones antiguas
    { path: 'proyecto1', redirectTo: 'inmortal', pathMatch: 'full' },
    { path: 'proyecto2', redirectTo: 'las-trece-puertas', pathMatch: 'full' },
    { path: 'proyecto3', redirectTo: 'azalon', pathMatch: 'full' },
];
