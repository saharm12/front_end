import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ; // Importation to client Http 


export interface Participant {
    id_participant;
nom_participant;
prenom_participant;
email_participant;
adresse;
code_postale;
raison_sociale;
code_TVA;
ville;
  }


@Injectable({
  providedIn: 'root' 
})

export class ParticipantService {
BASE_URL='http://localhost:3000/participant' ; 
 constructor(private http:HttpClient) { }

  
  getparticipant()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getparticipants',{headers:{
      'x-access-token':token 
    }}); 
  }

  

  
}