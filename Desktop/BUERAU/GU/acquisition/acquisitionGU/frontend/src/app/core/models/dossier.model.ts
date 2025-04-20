export interface Dossier {
  id?: number;
  reference: string;
  client_id: number;
  logement_id: number;
  type: 'Achat' | 'Location';
  statut: 'En cours' | 'Validé' | 'Refusé' | 'Terminé';
  date_creation: string;
  date_validation?: string;
  montant_total: number;
  montant_verse: number;
  observations?: string;
  documents?: Document[];
  paiements?: Paiement[];
  created_at?: string;
  updated_at?: string;
}

export interface Document {
  id?: number;
  dossier_id?: number;
  type: string;
  nom: string;
  chemin: string;
  date_ajout: string;
  created_at?: string;
  updated_at?: string;
}

export interface Paiement {
  id?: number;
  dossier_id?: number;
  montant: number;
  mode_paiement: string;
  date_paiement: string;
  reference?: string;
  observations?: string;
  created_at?: string;
  updated_at?: string;
}
