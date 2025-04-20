import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'guichets',
        loadChildren: () =>
          import('./features/guichets/guichets.module').then(
            (m) => m.GuichetsModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./features/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: 'logements',
        loadChildren: () =>
          import('./features/logements/logements.module').then(
            (m) => m.LogementsModule
          ),
      },
      {
        path: 'dossiers',
        loadChildren: () =>
          import('./features/dossiers/dossiers.module').then(
            (m) => m.DossiersModule
          ),
      },
      {
        path: 'paiements',
        loadChildren: () =>
          import('./features/paiements/paiements.module').then(
            (m) => m.PaiementsModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
