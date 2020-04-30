import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import {Speaker} from 'app/components/addspeaker/addspeaker.model';

export interface Speakers{
  id_speakers;
  nom_speakers;
  prenom_speakers;
  profil_speakers;
  pays;
}
@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  BASE_URL='http://localhost:3000/speaker' ; 

  constructor(private http:HttpClient) { }
  getSpeaker()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/Getsp',{headers:{
      'x-access-token':token 
    }}); 
  }
  PostSpeaker(nom_speakers, prenom_speakers, profil_speakers, pays)

  { let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/addspeaker',{
      'nom_speakers':nom_speakers,
      'prenom_speakers': prenom_speakers,
      'profil_speakers': profil_speakers,
      'pays': pays,
    }); 
  }
  
  SuppSpeakers(id) {
    let token = localStorage.getItem('token'); 
    return this.http.delete(this.BASE_URL+'/DeleteSpeak/'+id,{headers:{
      'x-access-token':token 
    }});
  }

  
  putspeak( sp : Speaker){
    let token = localStorage.getItem('token'); 
    return this.http.put(this.BASE_URL+'/modifiers/'+ sp.id_speakers,sp);
  
  }
}