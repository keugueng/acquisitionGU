import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogementService } from '../../../core/services/logement.service';

@Component({
  selector: 'app-logement-form-dialog',
  templateUrl: './logement-form-dialog.component.html',
  styleUrls: ['./logement-form-dialog.component.scss'],
})
export class LogementFormDialogComponent implements OnInit {
  logementForm: FormGroup;
  isEditMode = false;
  isLoading = false;

  types = ['Appartement', 'Maison', 'Studio', 'Duplex', 'Triplex', 'Loft'];

  statuts = ['Disponible', 'Occupé', 'En rénovation', 'Réservé'];

  constructor(
    private fb: FormBuilder,
    private logementService: LogementService,
    private dialogRef: MatDialogRef<LogementFormDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.logementForm = this.fb.group({
      reference: ['', Validators.required],
      type: ['', Validators.required],
      surface: ['', [Validators.required, Validators.min(0)]],
      prix: ['', [Validators.required, Validators.min(0)]],
      adresse: ['', Validators.required],
      description: [''],
      statut: ['Disponible', Validators.required],
      caracteristiques: this.fb.group({
        pieces: ['', [Validators.required, Validators.min(0)]],
        chambres: ['', [Validators.required, Validators.min(0)]],
        sdb: ['', [Validators.required, Validators.min(0)]],
        balcon: [false],
        jardin: [false],
        parking: [false],
        ascenseur: [false],
      }),
      equipements: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.isEditMode = true;
      this.logementForm.patchValue(this.data);
      if (this.data.equipements) {
        this.data.equipements.forEach((equipement: string) => {
          this.equipements.push(this.fb.control(equipement));
        });
      }
    }
  }

  get equipements() {
    return this.logementForm.get('equipements') as FormArray;
  }

  addEquipement(): void {
    this.equipements.push(this.fb.control(''));
  }

  removeEquipement(index: number): void {
    this.equipements.removeAt(index);
  }

  onSubmit(): void {
    if (this.logementForm.valid) {
      this.isLoading = true;
      const logementData = this.logementForm.value;

      if (this.isEditMode) {
        this.logementService
          .updateLogement(this.data.id, logementData)
          .subscribe({
            next: () => {
              this.snackBar.open('Logement mis à jour avec succès', 'Fermer', {
                duration: 3000,
              });
              this.dialogRef.close(true);
            },
            error: (error) => {
              console.error('Erreur lors de la mise à jour:', error);
              this.snackBar.open(
                'Erreur lors de la mise à jour du logement',
                'Fermer',
                { duration: 3000 }
              );
              this.isLoading = false;
            },
          });
      } else {
        this.logementService.createLogement(logementData).subscribe({
          next: () => {
            this.snackBar.open('Logement créé avec succès', 'Fermer', {
              duration: 3000,
            });
            this.dialogRef.close(true);
          },
          error: (error) => {
            console.error('Erreur lors de la création:', error);
            this.snackBar.open(
              'Erreur lors de la création du logement',
              'Fermer',
              { duration: 3000 }
            );
            this.isLoading = false;
          },
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
