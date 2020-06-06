import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class CategorieSerService {
  BASE_URL='http://localhost:3000/sponsors' ;
  constructor(private http:HttpClient) { }

  getsponsors()
   { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getspons',{headers:{
      'x-access-token':token 
    }});}
  
    Postspons( imageURL)

    { let token = localStorage.getItem('token'); 
      return this.http.post(this.BASE_URL+'/ajouter',{
        'imageURL':imageURL,
        
      }); 
    }

    deletspons(id) {
      let token = localStorage.getItem('token'); 
      return this.http.delete(this.BASE_URL+'/deletesponsors/'+id,{headers:{
        'x-access-token':token 
      }}); 
    }
}
