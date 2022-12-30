import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient :HttpClient
  ) { }

  getLogo(){
    return this.httpClient.get(`${environment.backend}/api/WebDashboard/GetLogo`);
  }
}
