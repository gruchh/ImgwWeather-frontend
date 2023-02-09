import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementListComponent } from './rivers/measurement-list/measurement-list.component';
import { RiversComponent } from './rivers/rivers.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'rivers', component: RiversComponent},
  {path: 'rivers/measurements', component: MeasurementListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, RiversComponent, MeasurementListComponent]
