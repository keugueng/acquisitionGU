import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Paiement } from '../models/dossier.model';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class PaiementService {
  private apiUrl = `${environment.apiUrl}/paiements`;

  constructor(private http: HttpClient) {}

  getPaiements(): Observable<PaginatedResponse<Paiement>> {
    return this.http.get<PaginatedResponse<Paiement>>(this.apiUrl);
  }

  getPaiement(id: number): Observable<ApiResponse<Paiement>> {
    return this.http.get<ApiResponse<Paiement>>(`${this.apiUrl}/${id}`);
  }

  createPaiement(paiement: Paiement): Observable<ApiResponse<Paiement>> {
    return this.http.post<ApiResponse<Paiement>>(this.apiUrl, paiement);
  }

  updatePaiement(
    id: number,
    paiement: Paiement
  ): Observable<ApiResponse<Paiement>> {
    return this.http.put<ApiResponse<Paiement>>(
      `${this.apiUrl}/${id}`,
      paiement
    );
  }

  deletePaiement(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }

  getPaiementsByDossier(
    dossierId: number
  ): Observable<PaginatedResponse<Paiement>> {
    return this.http.get<PaginatedResponse<Paiement>>(
      `${this.apiUrl}/dossier/${dossierId}`
    );
  }

  getStatistiquesPaiements(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/statistiques`);
  }
}
