import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from '../../components/client/client-list/client-list.component';
import { ClientVisitesComponent } from './client-visites/client-visites.component';
import { ClientDossiersComponent } from './client-dossiers/client-dossiers.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ClientListComponent },
  { path: 'new', component: ClientFormComponent },
  { path: 'edit/:id', component: ClientFormComponent },
  { path: ':id/visites', component: ClientVisitesComponent },
  { path: ':id/dossiers', component: ClientDossiersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
