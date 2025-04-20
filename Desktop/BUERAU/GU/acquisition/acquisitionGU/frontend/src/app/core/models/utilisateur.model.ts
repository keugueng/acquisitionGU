export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  role: 'admin' | 'agent' | 'manager';
  guichet_id?: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Guichet {
  id?: number;
  nom: string;
  adresse: string;
  telephone: string;
  email?: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}
