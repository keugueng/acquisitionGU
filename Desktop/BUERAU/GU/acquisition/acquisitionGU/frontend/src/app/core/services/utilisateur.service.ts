import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Utilisateur, Guichet } from '../models/utilisateur.model';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private apiUrlUtilisateurs = `${environment.apiUrl}/utilisateurs`;
  private apiUrlGuichets = `${environment.apiUrl}/guichets`;

  constructor(private http: HttpClient) {}

  // Utilisateurs
  getUtilisateurs(): Observable<PaginatedResponse<Utilisateur>> {
    return this.http.get<PaginatedResponse<Utilisateur>>(
      this.apiUrlUtilisateurs
    );
  }

  getUtilisateur(id: number): Observable<ApiResponse<Utilisateur>> {
    return this.http.get<ApiResponse<Utilisateur>>(
      `${this.apiUrlUtilisateurs}/${id}`
    );
  }

  createUtilisateur(
    utilisateur: Utilisateur
  ): Observable<ApiResponse<Utilisateur>> {
    return this.http.post<ApiResponse<Utilisateur>>(
      this.apiUrlUtilisateurs,
      utilisateur
    );
  }

  updateUtilisateur(
    id: number,
    utilisateur: Utilisateur
  ): Observable<ApiResponse<Utilisateur>> {
    return this.http.put<ApiResponse<Utilisateur>>(
      `${this.apiUrlUtilisateurs}/${id}`,
      utilisateur
    );
  }

  deleteUtilisateur(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(
      `${this.apiUrlUtilisateurs}/${id}`
    );
  }

  // Guichets
  getGuichets(): Observable<PaginatedResponse<Guichet>> {
    return this.http.get<PaginatedResponse<Guichet>>(this.apiUrlGuichets);
  }

  getGuichet(id: number): Observable<ApiResponse<Guichet>> {
    return this.http.get<ApiResponse<Guichet>>(`${this.apiUrlGuichets}/${id}`);
  }

  createGuichet(guichet: Guichet): Observable<ApiResponse<Guichet>> {
    return this.http.post<ApiResponse<Guichet>>(this.apiUrlGuichets, guichet);
  }

  updateGuichet(
    id: number,
    guichet: Guichet
  ): Observable<ApiResponse<Guichet>> {
    return this.http.put<ApiResponse<Guichet>>(
      `${this.apiUrlGuichets}/${id}`,
      guichet
    );
  }

  deleteGuichet(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrlGuichets}/${id}`);
  }

  // Méthodes spécifiques
  getUtilisateursByGuichet(
    guichetId: number
  ): Observable<PaginatedResponse<Utilisateur>> {
    return this.http.get<PaginatedResponse<Utilisateur>>(
      `${this.apiUrlUtilisateurs}/guichet/${guichetId}`
    );
  }

  getUtilisateursByRole(
    role: string
  ): Observable<PaginatedResponse<Utilisateur>> {
    return this.http.get<PaginatedResponse<Utilisateur>>(
      `${this.apiUrlUtilisateurs}/role/${role}`
    );
  }

  updateUtilisateurStatus(
    id: number,
    isActive: boolean
  ): Observable<ApiResponse<Utilisateur>> {
    return this.http.put<ApiResponse<Utilisateur>>(
      `${this.apiUrlUtilisateurs}/${id}/status`,
      { is_active: isActive }
    );
  }

  updateGuichetStatus(
    id: number,
    isActive: boolean
  ): Observable<ApiResponse<Guichet>> {
    return this.http.put<ApiResponse<Guichet>>(
      `${this.apiUrlGuichets}/${id}/status`,
      { is_active: isActive }
    );
  }
}
