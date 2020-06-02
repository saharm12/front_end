import { Component, OnInit } from '@angular/core';
import {  FileUploader  } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import {DocumentService} from 'app/services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})


export class DocumentComponent implements OnInit {
  uploadedFile:File ;
  public uploader:FileUploader ;
  nom_fichier="";
  document= []; 
  constructor( private http:HttpClient ,private docService:DocumentService ) {  }

  ngOnInit() {
    this.getDocument();
  }
  fileChange(element) {
    this.uploadedFile = element.target.files[0];
 }
 Ajouterdocument()
 {  // this.uploader.uploadAll();

let data = new FormData();
data.append('userfile',this.uploadedFile);
data.append('nom_fichier',this.nom_fichier);

  this.http.post('http://localhost:3000/document/addfile',data ).subscribe(data=>{
  let result:any =data; 
    console.log(result);
    if(result)
    { 
       this.getDocument();
      console.log("ok")
      
    }
  })

 }
 getDocument(){
  {   
    this.docService.getDocument().subscribe(data=>{
    

      let result:any = data; 
      console.log(result.laureats); 
     

      this.document = result.document; 
      

    })
 }


 }
}
