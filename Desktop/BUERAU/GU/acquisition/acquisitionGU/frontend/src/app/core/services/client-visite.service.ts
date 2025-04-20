import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ClientVisite } from '../../features/clients/client-visits/client-visite.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientVisiteService {
  private apiUrl = `${environment.apiUrl}/client-visites`;

  constructor(private http: HttpClient) {}

  getVisites(): Observable<ClientVisite[]> {
    return this.http.get<ClientVisite[]>(this.apiUrl);
  }

  getVisite(id: number): Observable<ClientVisite> {
    return this.http.get<ClientVisite>(`${this.apiUrl}/${id}`);
  }

  createVisite(visite: Partial<ClientVisite>): Observable<ClientVisite> {
    return this.http.post<ClientVisite>(this.apiUrl, visite);
  }

  updateVisite(
    id: number,
    visite: Partial<ClientVisite>
  ): Observable<ClientVisite> {
    return this.http.put<ClientVisite>(`${this.apiUrl}/${id}`, visite);
  }

  deleteVisite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
