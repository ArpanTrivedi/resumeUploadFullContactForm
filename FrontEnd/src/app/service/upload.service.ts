import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  //url of backend
  url: string = "http://localhost:5000/api/";
  constructor(private http: HttpClient) {}

  //post the data to the backend
  postUserData(post) {
    return this.http.post((this.url + "upload"), post);
  }


  //get the data from backend
  getUserData() {
    return this.http.get((this.url + "allApplicant"));
  }

}
