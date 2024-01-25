import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManagementUsersService {
  httpClient = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/'; // Reemplaza con tu URL de la API

  constructor() {
  }

  getAll(options?: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}customUser`, options)
  }

  //
  get(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}customUser/${id}`);
  }

  //
  // create(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/datos`, data);
  // }
  //
  // update(id: number, data: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/datos/${id}`, data);
  // }
  //
  // delete(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/datos/${id}`);
  // }
}
