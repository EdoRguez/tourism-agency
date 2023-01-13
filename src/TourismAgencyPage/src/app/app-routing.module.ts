import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'posadas',
        loadChildren: () =>
            import('./pages/destinations/destinations.module').then(
                (m) => m.DestinationsModule
            ),
    },
    {
        path: 'embarcaciones',
        loadChildren: () =>
            import('./pages/boats/boats.module').then((m) => m.BoatsModule),
    },
    {
        path: 'casas',
        loadChildren: () =>
            import('./pages/houses/houses.module').then((m) => m.HousesModule),
    },
    // {
    //     path: 'planes',
    //     loadChildren: () =>
    //         import('./pages/tourist-plans/tourist-plans.module').then(
    //             (m) => m.TouristPlansModule
    //         ),
    // },
    // {
    //     path: 'eventos',
    //     loadChildren: () =>
    //         import('./pages/tourism-events/tourism-events.module').then(
    //             (m) => m.TourismEventsModule
    //         ),
    // },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
