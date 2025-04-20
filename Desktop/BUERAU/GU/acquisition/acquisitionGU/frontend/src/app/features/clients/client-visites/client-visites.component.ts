import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../../services/client.service';
import { VisiteLogement } from '../../../models/client.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { VisiteFormDialogComponent } from './visite-form-dialog/visite-form-dialog.component';

@Component({
  selector: 'app-client-visites',
  templateUrl: './client-visites.component.html',
  styleUrls: ['./client-visites.component.scss'],
})
export class ClientVisitesComponent implements OnInit {
  displayedColumns: string[] = [
    'dateVisite',
    'logementId',
    'observations',
    'interessePar',
    'raisonRefus',
    'actions',
  ];

  dataSource: MatTableDataSource<VisiteLogement>;
  clientId: number;

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource<VisiteLogement>();
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadVisites();
  }

  loadVisites(): void {
    this.clientService.getVisitesByClient(this.clientId).subscribe({
      next: (visites) => {
        this.dataSource.data = visites;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des visites:', error);
        this.snackBar.open('Erreur lors du chargement des visites', 'Fermer', {
          duration: 3000,
        });
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addVisite(): void {
    const dialogRef = this.dialog.open(VisiteFormDialogComponent, {
      data: { clientId: this.clientId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.clientService.createVisite(this.clientId, result).subscribe({
          next: () => {
            this.loadVisites();
            this.snackBar.open('Visite ajoutée avec succès', 'Fermer', {
              duration: 3000,
            });
          },
          error: (error) => {
            console.error("Erreur lors de l'ajout de la visite:", error);
            this.snackBar.open(
              "Erreur lors de l'ajout de la visite",
              'Fermer',
              {
                duration: 3000,
              }
            );
          },
        });
      }
    });
  }

  editVisite(visite: VisiteLogement): void {
    const dialogRef = this.dialog.open(VisiteFormDialogComponent, {
      data: { visite, clientId: this.clientId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && visite.id) {
        this.clientService.updateVisite(visite.id, result).subscribe({
          next: () => {
            this.loadVisites();
            this.snackBar.open('Visite modifiée avec succès', 'Fermer', {
              duration: 3000,
            });
          },
          error: (error) => {
            console.error(
              'Erreur lors de la modification de la visite:',
              error
            );
            this.snackBar.open(
              'Erreur lors de la modification de la visite',
              'Fermer',
              {
                duration: 3000,
              }
            );
          },
        });
      }
    });
  }

  deleteVisite(visite: VisiteLogement): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette visite ?')) {
      if (visite.id) {
        this.clientService.deleteVisite(visite.id).subscribe({
          next: () => {
            this.loadVisites();
            this.snackBar.open('Visite supprimée avec succès', 'Fermer', {
              duration: 3000,
            });
          },
          error: (error) => {
            console.error('Erreur lors de la suppression de la visite:', error);
            this.snackBar.open(
              'Erreur lors de la suppression de la visite',
              'Fermer',
              {
                duration: 3000,
              }
            );
          },
        });
      }
    }
  }
}
