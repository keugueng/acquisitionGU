import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ClientService } from '../../../core/services/client.service';
import { Client } from '../client.interface';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormDialogComponent } from '../client-form-dialog/client-form-dialog.component';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  displayedColumns: string[] = [
    'nom',
    'prenom',
    'telephone',
    'email',
    'actions',
  ];
  dataSource: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Client>([]);
  }

  ngOnInit(): void {
    this.loadClients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(
      (clients) => {
        this.dataSource.data = clients;
      },
      (error) => {
        console.error('Erreur lors du chargement des clients:', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openClientForm(client?: Client): void {
    const dialogRef = this.dialog.open(ClientFormDialogComponent, {
      width: '800px',
      data: { client },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadClients();
      }
    });
  }

  viewClient(id: number): void {
    this.router.navigate(['/clients', id]);
  }

  viewClientVisites(id: number): void {
    this.router.navigate(['/clients', id, 'visites']);
  }

  viewClientDossiers(id: number): void {
    this.router.navigate(['/clients', id, 'dossiers']);
  }

  deleteClient(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.clientService.deleteClient(id).subscribe(
        () => {
          this.loadClients();
        },
        (error) => {
          console.error('Erreur lors de la suppression du client:', error);
        }
      );
    }
  }
}
