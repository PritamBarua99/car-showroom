import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent : () => import('./component/home/home').then(c => c.Home)
},
{
    path: 'browseCars',
    loadComponent : () => import('./component/carlist/carlist').then(c => c.Carlist)
},
{
    path: 'contactUs',
    loadComponent : () => import('./component/contact-us/contact-us').then(c => c.ContactUs)
},
{
    path: 'about',
    loadComponent : () => import('./component/about/about').then(c => c.About)
},
{
    path: 'car/:id',
    loadComponent : () => import('./component/car-detail/car-detail').then(c => c.CarDetailComponent)
}
];
