import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogementService } from '../../../core/services/logement.service';
import { LogementFormDialogComponent } from '../logement-form-dialog/logement-form-dialog.component';

@Component({
  selector: 'app-logement-details',
  templateUrl: './logement-details.component.html',
  styleUrls: ['./logement-details.component.scss'],
})
export class LogementDetailsComponent implements OnInit {
  logement: any;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logementService: LogementService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadLogement();
  }

  loadLogement(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isLoading = true;
      this.logementService.getLogement(+id).subscribe({
        next: (logement) => {
          this.logement = logement;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erreur lors du chargement du logement:', error);
          this.snackBar.open(
            'Erreur lors du chargement du logement',
            'Fermer',
            { duration: 3000 }
          );
          this.isLoading = false;
        },
      });
    }
  }

  editLogement(): void {
    const dialogRef = this.dialog.open(LogementFormDialogComponent, {
      width: '800px',
      data: this.logement,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadLogement();
      }
    });
  }

  deleteLogement(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce logement ?')) {
      this.logementService.deleteLogement(this.logement.id).subscribe({
        next: () => {
          this.snackBar.open('Logement supprimé avec succès', 'Fermer', {
            duration: 3000,
          });
          this.router.navigate(['/logements']);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression du logement:', error);
          this.snackBar.open(
            'Erreur lors de la suppression du logement',
            'Fermer',
            { duration: 3000 }
          );
        },
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/logements']);
  }
}
