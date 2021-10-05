import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuestion, IResponse, IUser } from '../interfaces/users-and-questions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class TestUsersAndQuestionsService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(`${this.apiUrl}/IQuestion`);
  }
  getResponses(QId: string, RId: number): Observable<IResponse[]> {
    return this.http.get<IResponse[]>(`${this.apiUrl}/IResponse?questionId=${QId}&answeredIndex=${RId}`);
  }
  getUser(id:string): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/IUser?id=${id}`);
  }
  getUsers(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/IUser`);
  }
}
