import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  url = "http://localhost:3000/clientportal/api"
  message!: string;
  constructor(private client: HttpClient) { }

  uploadFile(file: File): Observable<typeof message> {
    const formData = new FormData();
    formData.append("file",file);
    let message: string = "";
    return this.client.post<typeof message>(this.url+"/upload", formData);

  }


  getPDF(){
    const httpOptions = {
      'responseType': 'arraybuffer' as 'json'
    };
    return this.client.get<any>(this.url+"/files/4547d15e-6709-4d02-ab9a-2c4d2ae2f4ef", httpOptions)
  }

  
}
