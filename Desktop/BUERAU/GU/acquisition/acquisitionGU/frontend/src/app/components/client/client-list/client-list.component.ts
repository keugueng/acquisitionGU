import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ClientService } from '../../../core/services/client.service';
import { Client } from '../../../features/clients/client.interface';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormDialogComponent } from '../../../features/clients/client-form-dialog/client-form-dialog.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
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
        this.clients = clients;
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

  viewClientDetails(client: Client): void {
    if (client.id) {
      this.router.navigate(['/clients', client.id]);
    }
  }

  editClient(client: Client): void {
    if (client.id) {
      this.router.navigate(['/clients', client.id, 'edit']);
    }
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

  viewClientVisites(client: Client): void {
    if (client.id) {
      this.router.navigate(['/clients', client.id, 'visits']);
    }
  }

  viewClientDossiers(client: Client): void {
    if (client.id) {
      this.router.navigate(['/clients', client.id, 'dossiers']);
    }
  }
}
