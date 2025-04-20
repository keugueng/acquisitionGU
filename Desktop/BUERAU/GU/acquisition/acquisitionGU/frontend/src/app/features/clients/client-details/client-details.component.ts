import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../core/services/client.service';
import { Client } from '../client.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {
  client: Client | null = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isLoading = true;
      this.clientService.getClient(id).subscribe(
        (client) => {
          this.client = client;
          this.isLoading = false;
        },
        (error) => {
          console.error('Erreur lors du chargement du client:', error);
          this.isLoading = false;
        }
      );
    }
  }

  onEdit(): void {
    if (this.client?.id) {
      this.router.navigate(['/clients', this.client.id, 'edit']);
    }
  }

  onViewVisites(): void {
    if (this.client?.id) {
      this.router.navigate(['/clients', this.client.id, 'visites']);
    }
  }

  onViewDossiers(): void {
    if (this.client?.id) {
      this.router.navigate(['/clients', this.client.id, 'dossiers']);
    }
  }

  onBack(): void {
    this.router.navigate(['/clients']);
  }
}
