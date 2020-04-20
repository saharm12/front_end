import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { Jury} from 'app/jury-list/jury-list.model'



export interface Jurie{
  id_jury;
  nom_jury;
  prenom_jury;
  profil_jury;
  pays;
}
 

@Injectable({
  providedIn: 'root'
})
export class JuryService {
  
  BASE_URL='http://localhost:3000/jurie' ; 

  constructor(private http:HttpClient) { }
 
  getjury()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/GetJuries',{headers:{
      'x-access-token':token 
    }}); 
  }
 
  Postjury(nom_jury, prenom_jury, profil_jury, pays)
  { let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/Addjurie',{
      'nom_jury':nom_jury,
      'prenom_jury': prenom_jury,
      'profil_jury': profil_jury,
      'pays': pays,
    }); 
  }
  SuppJu(id) {
    let token = localStorage.getItem('token'); 
    return this.http.delete(this.BASE_URL+'/DeleteJuries/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }

}
