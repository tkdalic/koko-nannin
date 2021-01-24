import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopulationCompositionComponent } from './pages/population-composition/population-composition.component';

const routes: Routes = [
  { path: '', component: PopulationCompositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
