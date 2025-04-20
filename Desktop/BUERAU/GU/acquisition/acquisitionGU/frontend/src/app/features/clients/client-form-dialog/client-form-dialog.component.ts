import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from '../../../core/services/client.service';
import { Client, Enfant } from '../client.interface';

@Component({
  selector: 'app-client-form-dialog',
  templateUrl: './client-form-dialog.component.html',
  styleUrls: ['./client-form-dialog.component.scss'],
})
export class ClientFormDialogComponent implements OnInit {
  clientForm!: FormGroup;
  isLoading = false;
  title: string;
  hidePassword = true;
  situationsMatrimoniales = [
    'Célibataire',
    'Marié(e)',
    'Divorcé(e)',
    'Veuf(ve)',
  ];
  sexes = ['Masculin', 'Féminin'];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<ClientFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { client?: Client }
  ) {
    this.title = data?.client ? 'Modifier le client' : 'Nouveau client';
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.clientForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      date_naissance: ['', Validators.required],
      lieu_naissance: ['', Validators.required],
      sexe: ['', Validators.required],
      nationalite: ['', Validators.required],
      numero_cni: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      date_delivrance_cni: ['', Validators.required],
      date_expiration_cni: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      quartier: ['', Validators.required],
      telephone: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9]{8,}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      profession: ['', Validators.required],
      employeur: [''],
      situation_matrimoniale: ['', Validators.required],
      nombre_enfants: [0, [Validators.required, Validators.min(0)]],
      enfants: this.fb.array([]),
    });

    if (this.data?.client) {
      this.clientForm.patchValue({
        nom: this.data.client.nom,
        prenom: this.data.client.prenom,
        date_naissance: this.data.client.date_naissance,
        lieu_naissance: this.data.client.lieu_naissance,
        sexe: this.data.client.sexe,
        nationalite: this.data.client.nationalite,
        numero_cni: this.data.client.numero_cni,
        date_delivrance_cni: this.data.client.date_delivrance_cni,
        date_expiration_cni: this.data.client.date_expiration_cni,
        adresse: this.data.client.adresse,
        ville: this.data.client.ville,
        quartier: this.data.client.quartier,
        telephone: this.data.client.telephone,
        email: this.data.client.email,
        profession: this.data.client.profession,
        employeur: this.data.client.employeur,
        situation_matrimoniale: this.data.client.situation_matrimoniale,
        nombre_enfants: this.data.client.nombre_enfants,
      });

      if (this.data.client.enfants) {
        this.data.client.enfants.forEach((enfant: Enfant) =>
          this.addEnfant(enfant)
        );
      }
    }
  }

  get enfants() {
    return this.clientForm.get('enfants') as FormArray;
  }

  addEnfant(enfant?: Enfant): void {
    const enfantForm = this.fb.group({
      nom: [enfant?.nom || '', [Validators.required]],
      prenom: [enfant?.prenom || '', [Validators.required]],
      date_naissance: [enfant?.date_naissance || '', [Validators.required]],
      sexe: [enfant?.sexe || '', [Validators.required]],
      scolarise: [enfant?.scolarise || false],
      niveau_scolaire: [enfant?.niveau_scolaire || ''],
    });

    this.enfants.push(enfantForm);
  }

  removeEnfant(index: number): void {
    this.enfants.removeAt(index);
    this.clientForm.get('nombre_enfants')?.setValue(this.enfants.length);
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.isLoading = true;
      const clientData = this.clientForm.value;

      if (this.data?.client?.id) {
        this.clientService
          .updateClient(this.data.client.id, clientData)
          .subscribe({
            next: (response) => {
              this.dialogRef.close(response);
            },
            error: (error) => {
              console.error('Erreur lors de la mise à jour du client:', error);
              this.isLoading = false;
            },
          });
      } else {
        this.clientService.createClient(clientData).subscribe({
          next: (response) => {
            this.dialogRef.close(response);
          },
          error: (error) => {
            console.error('Erreur lors de la création du client:', error);
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
