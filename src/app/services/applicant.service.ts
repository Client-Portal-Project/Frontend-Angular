import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../classes/applicant';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private httpclient: HttpClient, private util: UtilService) { }

  endpoint = "/applicant/"
  getApplicants(): Observable<Applicant[]> {
    return this.httpclient.get<Applicant[]>(this.util.api(this.endpoint));
  }

  getApplicant(id: number): Observable<Applicant> {
    return this.httpclient.get<Applicant>(this.util.api(this.endpoint) + id);
  }

  createApplicant(applicant: Applicant): Observable<Applicant> {
    return this.httpclient.post<Applicant>(this.util.api(this.endpoint), applicant);
  }

  // todo: create applicant service, create form for applicant, use service in form to create applicant in backend.
}
