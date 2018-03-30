import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL: string = environment.apiUrl;

@Injectable()
export class UserServiceService {

  constructor(private http: Http) { }

  getUsers(): Observable<Client[]>
  {
    let x = this.http
    .get(API_URL + "/users")
    .map(response => {
      const clients = response.json();
      return clients.map((client) => new Client(client));
    })
    .catch(this.handleError);

    return x;
  }
  
  private handleError (error: Response | any) 
  {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
