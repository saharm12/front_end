import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class CategorieSerService {
  BASE_URL='http://localhost:3000/categorie' ;
  constructor(private http:HttpClient) { }

  getcategorie()
   { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getcategorie',{headers:{
      'x-access-token':token 
    }});}
  
    addcategorie( nom_categorie)

    { let token = localStorage.getItem('token'); 
      return this.http.post(this.BASE_URL+'/ajouter',{
       // 'imageURL':imageURL,
        //'nom_speakers':nom_speakers,
}
      )}}
