import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientVisitesComponent } from './client-visites/client-visites.component';
import { ClientDossiersComponent } from './client-dossiers/client-dossiers.component';
import { ClientFormDialogComponent } from './client-form-dialog/client-form-dialog.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientService } from '../../core/services/client.service';
import { VisiteFormDialogComponent } from './client-visites/visite-form-dialog/visite-form-dialog.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: ClientsListComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  { path: 'new', component: ClientFormComponent, canActivate: [AuthGuard] },
  {
    path: ':id/edit',
    component: ClientFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id/visites',
    component: ClientVisitesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id/dossiers',
    component: ClientDossiersComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientFormComponent,
    ClientVisitesComponent,
    ClientDossiersComponent,
    ClientFormDialogComponent,
    ClientDetailsComponent,
    VisiteFormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [ClientService],
  exports: [ClientFormDialogComponent],
})
export class ClientsModule {}
