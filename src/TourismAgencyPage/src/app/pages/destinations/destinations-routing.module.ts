import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { DestinationsComponent } from './destinations.component';

const routes: Routes = [
    { path: '', component: DestinationsComponent },
    { path: ':id', component: DestinationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DestinationsRoutingModule {}
