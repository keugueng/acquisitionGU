export interface Logement {
  id?: number;
  reference: string;
  type: string;
  surface: number;
  prix: number;
  adresse: string;
  description?: string;
  statut: string;
  caracteristiques: {
    pieces: number;
    chambres: number;
    sdb: number;
    balcon?: boolean;
    jardin?: boolean;
    parking?: boolean;
    ascenseur?: boolean;
  };
  equipements?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface LogementFilter {
  type?: string;
  statut?: string;
  minPrix?: number;
  maxPrix?: number;
  minSurface?: number;
  maxSurface?: number;
}
