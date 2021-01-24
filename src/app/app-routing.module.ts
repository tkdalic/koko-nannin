import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import { PopulationCompositionComponent } from './pages/population-composition/population-composition.component';

const routes: Routes = [
  { path: '', component: PopulationCompositionComponent },
  { path: '500', component: InternalServerErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
