import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

export interface Dossier {
  id: number;
  client_id: number;
  numero_dossier: string;
  date_creation: string;
  statut: string;
  montant: number;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-client-dossiers',
  templateUrl: './client-dossiers.component.html',
  styleUrls: ['./client-dossiers.component.scss'],
})
export class ClientDossiersComponent implements OnInit {
  displayedColumns: string[] = [
    'numero_dossier',
    'date_creation',
    'statut',
    'montant',
    'actions',
  ];
  dataSource: MatTableDataSource<Dossier>;
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource<Dossier>();
  }

  ngOnInit(): void {
    this.loadDossiers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadDossiers(): void {
    this.isLoading = true;
    // TODO: Implement dossier loading from service
    this.isLoading = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDossier(dossier: Dossier): void {
    // TODO: Implement view dossier
  }

  editDossier(dossier: Dossier): void {
    // TODO: Implement edit dossier
  }

  deleteDossier(dossier: Dossier): void {
    // TODO: Implement delete dossier
  }
}
