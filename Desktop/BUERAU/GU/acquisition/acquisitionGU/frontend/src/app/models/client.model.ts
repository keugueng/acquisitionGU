export interface Enfant {
  id?: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  sexe: 'M' | 'F';
  scolarise: boolean;
  niveauScolaire?: string;
}

export interface VisiteLogement {
  id?: number;
  dateVisite: Date;
  logementId: number;
  observations: string;
  interessePar: boolean;
  raisonRefus?: string;
}

export interface DossierAcquisition {
  id?: number;
  numeroDossier: string;
  dateCreation: Date;
  statut: 'EN_COURS' | 'ACCEPTE' | 'REFUSE' | 'EN_ATTENTE';
  fraisOuverturePaye: boolean;
  datePaiementFrais?: Date;
  montantFrais: number;
  documentsVerifies: boolean;
  solvabiliteVerifiee: boolean;
  revenuMensuel: number;
  observations: string;
  piecesFournies: string[];
}

export interface Client {
  id?: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  lieuNaissance: string;
  sexe: 'M' | 'F';
  nationalite: string;
  numeroCNI: string;
  dateDelivranceCNI: Date;
  dateExpirationCNI: Date;
  profession: string;
  employeur?: string;
  telephone: string;
  email: string;
  adresse: string;
  ville: string;
  quartier: string;
  situationMatrimoniale: 'CELIBATAIRE' | 'MARIE' | 'DIVORCE' | 'VEUF';
  enfants: Enfant[];
  visites: VisiteLogement[];
  dossiers: DossierAcquisition[];
  dateCreation: Date;
  dateModification: Date;
  statut: 'ACTIF' | 'INACTIF' | 'ARCHIVE';
}
