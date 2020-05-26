import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;


 @Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
  BASE_URL='http://localhost:3000/programme' ; 

  constructor(private http:HttpClient) { }

 Ajouterprog(date_retenir,details_programme){ 
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/ajouterProg',{
     'date_retenir':date_retenir,
     'details_programme':details_programme,

    }); 
  }



}
