import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisiteLogement } from '../../../../models/client.model';

@Component({
  selector: 'app-visite-form-dialog',
  templateUrl: './visite-form-dialog.component.html',
  styleUrls: ['./visite-form-dialog.component.scss'],
})
export class VisiteFormDialogComponent implements OnInit {
  visiteForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VisiteFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { visite?: VisiteLogement; clientId: number }
  ) {
    this.visiteForm = this.fb.group({
      dateVisite: ['', Validators.required],
      logementId: ['', Validators.required],
      observations: [''],
      interessePar: [false],
      raisonRefus: [''],
    });
  }

  ngOnInit(): void {
    if (this.data.visite) {
      this.isEditMode = true;
      this.visiteForm.patchValue(this.data.visite);
    }
  }

  onSubmit(): void {
    if (this.visiteForm.valid) {
      const visiteData = {
        ...this.visiteForm.value,
        clientId: this.data.clientId,
      };
      this.dialogRef.close(visiteData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
