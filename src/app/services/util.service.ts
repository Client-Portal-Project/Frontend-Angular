import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private _serverDomain: string = "http://localhost:3000";

  constructor() { }

  public getServerDomain() {
    return this._serverDomain;
  }
}
