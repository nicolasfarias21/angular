import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'categoria',
        component: CategoriaComponent
    }

];
