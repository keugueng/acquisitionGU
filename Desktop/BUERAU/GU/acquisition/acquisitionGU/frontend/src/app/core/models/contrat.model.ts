export interface ContratReservation {
  id?: number;
  reference: string;
  dossier_id: number;
  client_id: number;
  logement_id: number;
  date_signature: string;
  date_debut: string;
  date_fin?: string;
  montant: number;
  statut: 'En cours' | 'Terminé' | 'Résilié';
  observations?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ActeVente {
  id?: number;
  reference: string;
  dossier_id: number;
  client_id: number;
  logement_id: number;
  date_signature: string;
  montant_total: number;
  mode_paiement: string;
  statut: 'En cours' | 'Validé' | 'Annulé';
  observations?: string;
  created_at?: string;
  updated_at?: string;
}
