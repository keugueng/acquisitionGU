import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../models/client.model';
import { ClientService } from '../../../core/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  clientId?: number;

  situationsFamiliales = ['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)'];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      date_naissance: ['', Validators.required],
      profession: ['', Validators.required],
      employeur: ['', Validators.required],
      matricule: ['', Validators.required],
      ville_origine: ['', Validators.required],
      situation_familiale: ['', Validators.required],
      numero_carte_passport: ['', Validators.required],
      numero_compte: ['', Validators.required],
      banque: ['', Validators.required],
      solvable: [false],
      salaire: [0, [Validators.required, Validators.min(0)]],
      autre_revenu: [0, Validators.min(0)],

      // Informations du conjoint (optionnelles)
      nom_conjoint: [''],
      prenom_conjoint: [''],
      ville_origine_conjoint: [''],
      date_naissance_conjoint: [''],
      profession_conjoint: [''],
      matricule_conjoint: [''],
      employeur_conjoint: [''],
      numero_carte__conjoint: [''],
      numero_compte_conjoint: [''],
      banque_conjoint: [''],
      salaire_conjoint: [0, Validators.min(0)],
    });
  }

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.clientId) {
      this.isEditMode = true;
      this.loadClient();
    }
  }

  loadClient(): void {
    if (this.clientId) {
      this.clientService.getClient(this.clientId).subscribe((client) => {
        this.clientForm.patchValue(client);
      });
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.isSubmitting = true;
      const clientData = this.clientForm.value;

      if (this.isEditMode && this.clientId) {
        this.clientService.updateClient(this.clientId, clientData).subscribe({
          next: () => {
            this.router.navigate(['/clients']);
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour du client:', error);
            this.isSubmitting = false;
          },
          complete: () => {
            this.isSubmitting = false;
          },
        });
      } else {
        this.clientService.createClient(clientData).subscribe({
          next: () => {
            this.router.navigate(['/clients']);
          },
          error: (error) => {
            console.error('Erreur lors de la création du client:', error);
            this.isSubmitting = false;
          },
          complete: () => {
            this.isSubmitting = false;
          },
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/clients']);
  }
}
