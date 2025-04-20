import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Dossier } from '../models/dossier.model';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class DossierService {
  private apiUrl = `${environment.apiUrl}/dossiers`;

  constructor(private http: HttpClient) {}

  getDossiers(): Observable<PaginatedResponse<Dossier>> {
    return this.http.get<PaginatedResponse<Dossier>>(this.apiUrl);
  }

  getDossier(id: number): Observable<ApiResponse<Dossier>> {
    return this.http.get<ApiResponse<Dossier>>(`${this.apiUrl}/${id}`);
  }

  createDossier(dossier: Dossier): Observable<ApiResponse<Dossier>> {
    return this.http.post<ApiResponse<Dossier>>(this.apiUrl, dossier);
  }

  updateDossier(
    id: number,
    dossier: Dossier
  ): Observable<ApiResponse<Dossier>> {
    return this.http.put<ApiResponse<Dossier>>(`${this.apiUrl}/${id}`, dossier);
  }

  deleteDossier(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }

  getDossiersByClient(
    clientId: number
  ): Observable<PaginatedResponse<Dossier>> {
    return this.http.get<PaginatedResponse<Dossier>>(
      `${this.apiUrl}/client/${clientId}`
    );
  }

  getDossiersByLogement(
    logementId: number
  ): Observable<PaginatedResponse<Dossier>> {
    return this.http.get<PaginatedResponse<Dossier>>(
      `${this.apiUrl}/logement/${logementId}`
    );
  }
}
