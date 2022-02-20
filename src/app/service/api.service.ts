import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../admin/product/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl:any='https://api.sunhouse.co.id/bookstore/index.php/'

  constructor(private http: HttpClient) { }
  
get(link: string):Observable<Product[]>{
    return this.http.get<Product[]>(this.serverUrl+link);
}

post(link: string,data:string){
    return this.http.post(this.serverUrl+link,data);
}

}
