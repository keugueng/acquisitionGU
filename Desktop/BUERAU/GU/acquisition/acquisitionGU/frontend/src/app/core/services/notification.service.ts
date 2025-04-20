import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Notification, Commission } from '../models/notification.model';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private apiUrlNotifications = `${environment.apiUrl}/notifications`;
  private apiUrlCommissions = `${environment.apiUrl}/commissions`;

  constructor(private http: HttpClient) {}

  // Notifications
  getNotifications(): Observable<PaginatedResponse<Notification>> {
    return this.http.get<PaginatedResponse<Notification>>(
      this.apiUrlNotifications
    );
  }

  getNotification(id: number): Observable<ApiResponse<Notification>> {
    return this.http.get<ApiResponse<Notification>>(
      `${this.apiUrlNotifications}/${id}`
    );
  }

  createNotification(
    notification: Notification
  ): Observable<ApiResponse<Notification>> {
    return this.http.post<ApiResponse<Notification>>(
      this.apiUrlNotifications,
      notification
    );
  }

  markAsRead(id: number): Observable<ApiResponse<Notification>> {
    return this.http.put<ApiResponse<Notification>>(
      `${this.apiUrlNotifications}/${id}/read`,
      {}
    );
  }

  deleteNotification(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(
      `${this.apiUrlNotifications}/${id}`
    );
  }

  getUnreadCount(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(
      `${this.apiUrlNotifications}/unread/count`
    );
  }

  // Commissions
  getCommissions(): Observable<PaginatedResponse<Commission>> {
    return this.http.get<PaginatedResponse<Commission>>(this.apiUrlCommissions);
  }

  getCommission(id: number): Observable<ApiResponse<Commission>> {
    return this.http.get<ApiResponse<Commission>>(
      `${this.apiUrlCommissions}/${id}`
    );
  }

  createCommission(
    commission: Commission
  ): Observable<ApiResponse<Commission>> {
    return this.http.post<ApiResponse<Commission>>(
      this.apiUrlCommissions,
      commission
    );
  }

  updateCommission(
    id: number,
    commission: Commission
  ): Observable<ApiResponse<Commission>> {
    return this.http.put<ApiResponse<Commission>>(
      `${this.apiUrlCommissions}/${id}`,
      commission
    );
  }

  deleteCommission(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(
      `${this.apiUrlCommissions}/${id}`
    );
  }

  getCommissionsByUtilisateur(
    utilisateurId: number
  ): Observable<PaginatedResponse<Commission>> {
    return this.http.get<PaginatedResponse<Commission>>(
      `${this.apiUrlCommissions}/utilisateur/${utilisateurId}`
    );
  }

  getCommissionsByDossier(
    dossierId: number
  ): Observable<PaginatedResponse<Commission>> {
    return this.http.get<PaginatedResponse<Commission>>(
      `${this.apiUrlCommissions}/dossier/${dossierId}`
    );
  }

  getStatistiquesCommissions(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(
      `${this.apiUrlCommissions}/statistiques`
    );
  }
}
