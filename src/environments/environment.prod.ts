import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  apiUrl: 'http://localhost:4200/clientportal',
  requestOptions: {                                                                                                                                                                                 
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }), 
  },
};
