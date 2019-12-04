import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../admin/auth/auth.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  auth(email: string, senha: string): Observable<AuthResponse> {    
    return this.http.post<AuthResponse>('http://localhost:3000/auth', {
      email: email,
      senha: senha
    });
  }
}
