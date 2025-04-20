import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LogementService } from '../../../core/services/logement.service';
import { LogementFormDialogComponent } from '../logement-form-dialog/logement-form-dialog.component';

@Component({
  selector: 'app-logements-list',
  templateUrl: './logements-list.component.html',
  styleUrls: ['./logements-list.component.scss'],
})
export class LogementsListComponent implements OnInit {
  displayedColumns: string[] = [
    'reference',
    'type',
    'surface',
    'prix',
    'adresse',
    'statut',
    'actions',
  ];
  dataSource: MatTableDataSource<any>;
  showOnlyAvailable = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private logementService: LogementService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.showOnlyAvailable = segments[0]?.path === 'disponibles';
      this.loadLogements();
    });
  }

  loadLogements(): void {
    this.logementService.getLogements().subscribe({
      next: (logements) => {
        if (this.showOnlyAvailable) {
          logements = logements.filter(
            (logement) => logement.statut === 'Disponible'
          );
        }
        this.dataSource.data = logements;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des logements:', error);
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

  openLogementForm(logement?: any): void {
    const dialogRef = this.dialog.open(LogementFormDialogComponent, {
      width: '800px',
      data: logement,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadLogements();
      }
    });
  }

  deleteLogement(logement: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce logement ?')) {
      this.logementService.deleteLogement(logement.id).subscribe(
        () => {
          this.loadLogements();
        },
        (error) => {
          console.error('Erreur lors de la suppression du logement:', error);
        }
      );
    }
  }
}
