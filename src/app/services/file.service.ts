import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponeMessage } from '../classes/ResponseMessage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  url = "http://localhost:3000/clientportal/api"

  constructor(private client: HttpClient) { }

  uploadFile(file: File): Observable<ResponeMessage> {
    const formData = new FormData();
    formData.append("file",file);
    let message: string = "";
    return this.client.post<ResponeMessage>(this.url+"/upload", formData);

  }


}
