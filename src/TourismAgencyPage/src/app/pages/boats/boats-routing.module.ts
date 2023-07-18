import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatsComponent } from './boats.component';
import { BoatComponent } from './boat/boat.component';

const routes: Routes = [
    { path: '', component: BoatsComponent },
    { path: ':id', component: BoatComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BoatsRoutingModule {}
