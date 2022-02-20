import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl:any='https://api.sunhouse.co.id/bookstore/index.php/'

  constructor(private http: HttpClient) { }

get(link: string){
    return this.http.get(this.serverUrl+link);
}


}
