import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserI } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  user$: Observable<UserI[]> | undefined;

  constructor(
    private httpClien: HttpClient
  ) { }
    
  getUser(): Observable<UserI[]> {
    this.user$ = this.httpClien.get<UserI[]>(`${environment.api_url}/user`)
      
    return this.user$
  }

}
