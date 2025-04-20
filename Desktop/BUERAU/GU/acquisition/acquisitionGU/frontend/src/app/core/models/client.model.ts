export interface Client {
  id?: number;
  nom: string;
  prenom: string;
  date_naissance: string;
  sexe: 'M' | 'F';
  nationalite: string;
  profession: string;
  adresse: string;
  telephone: string;
  email: string;
  situation_matrimoniale: string;
  nombre_enfants: number;
  enfants?: Enfant[];
  created_at?: string;
  updated_at?: string;
}

export interface Enfant {
  id?: number;
  client_id?: number;
  nom: string;
  prenom: string;
  date_naissance: string;
  sexe: 'M' | 'F';
  created_at?: string;
  updated_at?: string;
}

export interface ClientVisite {
  id?: number;
  client_id: number;
  date_visite: string;
  heure_visite: string;
  motif: string;
  observations?: string;
  created_at?: string;
  updated_at?: string;
}
