import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Client,
  Enfant,
  VisiteLogement,
  DossierAcquisition,
} from '../models/client.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // Méthodes pour les clients
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/clients/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/clients`, client);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clients/${id}`);
  }

  // Gestion des enfants
  addEnfant(clientId: number, enfant: Omit<Enfant, 'id'>): Observable<Enfant> {
    return this.http.post<Enfant>(
      `${this.apiUrl}/clients/${clientId}/enfants`,
      enfant
    );
  }

  updateEnfant(
    clientId: number,
    enfantId: number,
    enfant: Partial<Enfant>
  ): Observable<Enfant> {
    return this.http.patch<Enfant>(
      `${this.apiUrl}/clients/${clientId}/enfants/${enfantId}`,
      enfant
    );
  }

  deleteEnfant(clientId: number, enfantId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/clients/${clientId}/enfants/${enfantId}`
    );
  }

  // Méthodes pour les visites
  getVisitesByClient(clientId: number): Observable<VisiteLogement[]> {
    return this.http.get<VisiteLogement[]>(
      `${this.apiUrl}/clients/${clientId}/visites`
    );
  }

  createVisite(
    clientId: number,
    visite: VisiteLogement
  ): Observable<VisiteLogement> {
    return this.http.post<VisiteLogement>(
      `${this.apiUrl}/clients/${clientId}/visites`,
      visite
    );
  }

  updateVisite(
    visiteId: number,
    visite: VisiteLogement
  ): Observable<VisiteLogement> {
    return this.http.put<VisiteLogement>(
      `${this.apiUrl}/visites/${visiteId}`,
      visite
    );
  }

  deleteVisite(visiteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/visites/${visiteId}`);
  }

  // Gestion des dossiers d'acquisition
  createDossier(
    clientId: number,
    dossier: Omit<DossierAcquisition, 'id'>
  ): Observable<DossierAcquisition> {
    return this.http.post<DossierAcquisition>(
      `${this.apiUrl}/clients/${clientId}/dossiers`,
      dossier
    );
  }

  updateDossier(
    clientId: number,
    dossierId: number,
    dossier: Partial<DossierAcquisition>
  ): Observable<DossierAcquisition> {
    return this.http.patch<DossierAcquisition>(
      `${this.apiUrl}/clients/${clientId}/dossiers/${dossierId}`,
      dossier
    );
  }

  getDossiersByClient(clientId: number): Observable<DossierAcquisition[]> {
    return this.http.get<DossierAcquisition[]>(
      `${this.apiUrl}/clients/${clientId}/dossiers`
    );
  }

  // Méthodes de recherche et filtrage
  searchClients(query: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients/search`, {
      params: { q: query },
    });
  }

  filterClients(filters: {
    statut?: string;
    ville?: string;
    hasDossier?: boolean;
    dateDebut?: Date;
    dateFin?: Date;
  }): Observable<Client[]> {
    // Convertir les dates en chaînes de caractères ISO
    const params = {
      ...filters,
      dateDebut: filters.dateDebut?.toISOString(),
      dateFin: filters.dateFin?.toISOString(),
    };

    return this.http.get<Client[]>(`${this.apiUrl}/clients/filter`, {
      params: params as { [key: string]: string | number | boolean },
    });
  }

  // Méthodes spécifiques pour la gestion des documents
  verifierSolvabilite(
    clientId: number,
    documents: FormData
  ): Observable<{ solvable: boolean; raison?: string }> {
    return this.http.post<{ solvable: boolean; raison?: string }>(
      `${this.apiUrl}/clients/${clientId}/verifier-solvabilite`,
      documents
    );
  }

  uploadDocuments(
    clientId: number,
    dossierId: number,
    documents: FormData
  ): Observable<string[]> {
    return this.http.post<string[]>(
      `${this.apiUrl}/clients/${clientId}/dossiers/${dossierId}/documents`,
      documents
    );
  }

  // Statistiques clients
  getClientStats(): Observable<{
    totalClients: number;
    clientsActifs: number;
    dossiersPending: number;
    visitesMois: number;
  }> {
    return this.http.get<any>(`${this.apiUrl}/clients/stats`);
  }
}
