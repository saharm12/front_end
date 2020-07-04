import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {
  BASE_URL='http://localhost:3000/satisfaction' ; 

  constructor(private http:HttpClient) { }


  getAllSatisfactions( )
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/get',{headers: {   
     'x-access-token':token 
    }}); 
  }




  
  





}











