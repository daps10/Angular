import { Injectable } from '@angular/core';

// For use to call an API require to import httpclient
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DummyServicesService {

  // Add the injactable instance
  constructor(private http: HttpClient) { }

  getCategoryData () {
    return {
      id:1,
      name:"Electronics"
    }
  }

  // Through this module we can start the the call an api
  getTodosData (){
    let url = "https://jsonplaceholder.typicode.com/todos";

    return this.http.get(url);
  }

}
