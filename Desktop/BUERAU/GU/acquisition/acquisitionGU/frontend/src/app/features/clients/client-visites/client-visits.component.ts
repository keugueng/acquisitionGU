import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientVisiteService } from '../../../core/services/client-visite.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface ClientVisite {
  id: number;
  dateVisite: Date;
  logementId: number;
  observations: string;
  interessePar: string;
  raisonRefus: string;
  clientId: number;
}

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
  dataSource: MatTableDataSource<ClientVisite>;
  isLoading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private clientVisiteService: ClientVisiteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadVisites();
  }

  loadVisites(): void {
    this.isLoading = true;
    this.clientVisiteService.getVisites().subscribe({
      next: (visites) => {
        this.dataSource = new MatTableDataSource(visites);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading visits:', error);
        this.snackBar.open('Erreur lors du chargement des visites', 'Fermer', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editVisite(visite: ClientVisite): void {
    // TODO: Implement edit dialog
    console.log('Edit visite:', visite);
  }

  deleteVisite(visite: ClientVisite): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette visite ?')) {
      this.clientVisiteService.deleteVisite(visite.id).subscribe({
        next: () => {
          this.snackBar.open('Visite supprimée avec succès', 'Fermer', {
            duration: 3000,
          });
          this.loadVisites();
        },
        error: (error) => {
          console.error('Error deleting visite:', error);
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
