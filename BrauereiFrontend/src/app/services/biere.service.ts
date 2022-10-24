import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,} from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { AppSettings } from '../AppSettings';
import { IBier } from '../interfaces/IBier';

@Injectable({
  providedIn: 'root'
})
export class BiereService {

  constructor(private http: HttpClient, private loginService:LoginService) { 
  }

  getBiere(): Observable<any>{
    const user = JSON.parse(localStorage.getItem('brauerei_current_user'));
    const token = localStorage.getItem('brauerei_current_token');
    console.log(token);
    let header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<IBier[]>(AppSettings.API_ENDPOINT + '/produkte/getAll', user, {
      headers: header,
    }).pipe();
  }



}
