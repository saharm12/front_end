import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { Jury} from 'app/jury-list/jury-list.model'
import {Subject, Observable}  from 'rxjs';


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
 
  Postjury( imageURL,nom_jury, prenom_jury, profil_jury, pays)
  { let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/Addjurie',{
      'imageURL':imageURL,
      'nom_jury':nom_jury,
      'prenom_jury': prenom_jury,
      'profil_jury': profil_jury,
      'pays': pays,
    }); 
  }
  checkLinkedInNotTaken(profil_jury)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checkLinkedInNotTaken',{
      'profil_jury': profil_jury,
     
    }); 
  }
 


  SuppJu(id) {
    let token = localStorage.getItem('token'); 
    return this.http.delete(this.BASE_URL+'/DeleteJuries/'+id,{headers:{
      'x-access-token':token 
    }}); 
  }
  
 ModifJury( j : Jury ){
  let token = localStorage.getItem('token'); 
  return this.http.put(this.BASE_URL+'/UpdateMembre/'+ j.id_jury,j);

 }

}
