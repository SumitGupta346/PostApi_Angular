import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url= "http://127.0.0.1:3000/users";
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url)
  }
  saveUsers(data:any)
  {
    return this.http.post(this.url,data);

  }
}
