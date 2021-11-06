import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) {
   }
// display Data
topheadingDisplay:any=[];

   newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=bb15f37ec8eb4536989bb76da9e94cc3"
techApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bb15f37ec8eb4536989bb76da9e94cc3"
 
topHeading():Observable<any>{
     return this._http.get(this.newsApiUrl)
   }

   techNews():Observable<any>{
    return this._http.get(this.techApiUrl)
  }
}



