import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import {Laureat} from 'app/laureat/laureat.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Laureats{
    image;
  }
   
@Injectable({
  providedIn: 'root'
})
export class LaureatService {
    BASE_URL='http://localhost:3000/laureats' ; 

  constructor(private http:HttpClient) { }

 PostLaureat(image)
  { 
    
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/ajouter',{
     'image':image,

    }); 
  }
 getLaureat( )
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/GetLaureat',{headers: {   
     'x-access-token':token 
    }}); 
  }

  
}