export interface Client {
  id: number;
  nom: string;
  prenom: string;
  date_naissance: string;
  lieu_naissance: string;
  sexe: string;
  nationalite: string;
  numero_cni: string;
  date_delivrance_cni: string;
  date_expiration_cni: string;
  adresse: string;
  ville: string;
  quartier: string;
  telephone: string;
  email: string;
  profession: string;
  employeur?: string;
  situation_matrimoniale: string;
  nombre_enfants: number;
  enfants?: Enfant[];
  created_at: string;
  updated_at: string;
}

export interface Enfant {
  id: number;
  client_id: number;
  nom: string;
  prenom: string;
  date_naissance: string;
  sexe: string;
  scolarise: boolean;
  niveau_scolaire?: string;
  created_at: string;
  updated_at: string;
}
