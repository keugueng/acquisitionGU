export interface Notification {
  id?: number;
  utilisateur_id: number;
  titre: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  is_read: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Commission {
  id?: number;
  dossier_id: number;
  utilisateur_id: number;
  montant: number;
  pourcentage: number;
  date_commission: string;
  statut: 'En attente' | 'Payée' | 'Annulée';
  observations?: string;
  created_at?: string;
  updated_at?: string;
}
