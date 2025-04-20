import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContratReservation, ActeVente } from '../models/contrat.model';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ContratService {
  private apiUrlContrats = `${environment.apiUrl}/contrats_reservation`;
  private apiUrlActes = `${environment.apiUrl}/actes_vente`;

  constructor(private http: HttpClient) {}

  // Contrats de réservation
  getContrats(): Observable<PaginatedResponse<ContratReservation>> {
    return this.http.get<PaginatedResponse<ContratReservation>>(
      this.apiUrlContrats
    );
  }

  getContrat(id: number): Observable<ApiResponse<ContratReservation>> {
    return this.http.get<ApiResponse<ContratReservation>>(
      `${this.apiUrlContrats}/${id}`
    );
  }

  createContrat(
    contrat: ContratReservation
  ): Observable<ApiResponse<ContratReservation>> {
    return this.http.post<ApiResponse<ContratReservation>>(
      this.apiUrlContrats,
      contrat
    );
  }

  updateContrat(
    id: number,
    contrat: ContratReservation
  ): Observable<ApiResponse<ContratReservation>> {
    return this.http.put<ApiResponse<ContratReservation>>(
      `${this.apiUrlContrats}/${id}`,
      contrat
    );
  }

  deleteContrat(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrlContrats}/${id}`);
  }

  // Actes de vente
  getActesVente(): Observable<PaginatedResponse<ActeVente>> {
    return this.http.get<PaginatedResponse<ActeVente>>(this.apiUrlActes);
  }

  getActeVente(id: number): Observable<ApiResponse<ActeVente>> {
    return this.http.get<ApiResponse<ActeVente>>(`${this.apiUrlActes}/${id}`);
  }

  createActeVente(acte: ActeVente): Observable<ApiResponse<ActeVente>> {
    return this.http.post<ApiResponse<ActeVente>>(this.apiUrlActes, acte);
  }

  updateActeVente(
    id: number,
    acte: ActeVente
  ): Observable<ApiResponse<ActeVente>> {
    return this.http.put<ApiResponse<ActeVente>>(
      `${this.apiUrlActes}/${id}`,
      acte
    );
  }

  deleteActeVente(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrlActes}/${id}`);
  }

  // Méthodes spécifiques
  getContratsByClient(
    clientId: number
  ): Observable<PaginatedResponse<ContratReservation>> {
    return this.http.get<PaginatedResponse<ContratReservation>>(
      `${this.apiUrlContrats}/client/${clientId}`
    );
  }

  getActesByClient(clientId: number): Observable<PaginatedResponse<ActeVente>> {
    return this.http.get<PaginatedResponse<ActeVente>>(
      `${this.apiUrlActes}/client/${clientId}`
    );
  }

  getContratsByLogement(
    logementId: number
  ): Observable<PaginatedResponse<ContratReservation>> {
    return this.http.get<PaginatedResponse<ContratReservation>>(
      `${this.apiUrlContrats}/logement/${logementId}`
    );
  }

  getActesByLogement(
    logementId: number
  ): Observable<PaginatedResponse<ActeVente>> {
    return this.http.get<PaginatedResponse<ActeVente>>(
      `${this.apiUrlActes}/logement/${logementId}`
    );
  }
}
