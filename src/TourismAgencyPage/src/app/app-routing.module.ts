import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'destinos',
        loadChildren: () =>
            import('./pages/destinations/destinations.module').then(
                (m) => m.DestinationsModule
            ),
    },
    {
        path: 'lanchas',
        loadChildren: () =>
            import('./pages/boats/boats.module').then(
                (m) => m.BoatsModule
            ),
    },
    {
        path: 'planes',
        loadChildren: () =>
            import('./pages/tourist-plans/tourist-plans.module').then(
                (m) => m.TouristPlansModule
            ),
    },
    {
        path: 'eventos',
        loadChildren: () =>
            import('./pages/tourism-events/tourism-events.module').then(
                (m) => m.TourismEventsModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
