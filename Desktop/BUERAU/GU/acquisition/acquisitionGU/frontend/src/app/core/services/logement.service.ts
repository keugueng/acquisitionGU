import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogementService {
  private apiUrl = `${environment.apiUrl}/logements`;

  constructor(private http: HttpClient) {}

  getLogements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getLogement(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createLogement(logement: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, logement);
  }

  updateLogement(id: number, logement: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, logement);
  }

  deleteLogement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
