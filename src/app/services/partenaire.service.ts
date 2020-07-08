import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class partenaireService {
BASE_URL='http://localhost:3000/partenaire' ;
  constructor(private http:HttpClient) { }

  getpartenaire()
   { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getpartenaire',{headers:{
      'x-access-token':token 
    }});}
  
    Postpartenaire( imageURL)

    { let token = localStorage.getItem('token'); 
      return this.http.post(this.BASE_URL+'/ajouter',{
        'imageURL':imageURL,
        
      }); 
    }

    deletpartenaire(id) {
      let token = localStorage.getItem('token'); 
      return this.http.delete(this.BASE_URL+'/deletepartenaire/'+id,{headers:{
        'x-access-token':token 
      }}); 
    }
}
