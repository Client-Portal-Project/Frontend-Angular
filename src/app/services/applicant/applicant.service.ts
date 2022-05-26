import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../../classes/applicant';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private httpclient: HttpClient) { }

  getApplicants(): Observable<Applicant[]> {
    return this.httpclient.get<Applicant[]>(`${environment.apiUrl}/applicant`);
  }

  getApplicant(id: number): Observable<Applicant> {
    return this.httpclient.get<Applicant>(`${environment.apiUrl}/applicant/${id}`);
  }

  createApplicant(applicant: Applicant): Observable<Applicant> {
    return this.httpclient.post<Applicant>(`${environment.apiUrl}/applicant`, applicant);
  }

  updateApplicant(applicant: Applicant): Observable<Applicant> {
    return this.httpclient.put<Applicant>(`${environment.apiUrl}/applicant`, applicant);
  }

  deleteApplicant(id: number): Observable<Applicant> {
    return this.httpclient.delete<Applicant>(`${environment.apiUrl}/applicant/${id}`);
  }

}
