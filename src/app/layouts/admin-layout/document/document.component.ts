import { Component, OnInit } from '@angular/core';
import {  FileUploader  } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import {DocumentService} from 'app/services/document.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
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
 Supprimer(id_fichier) 
{
  //this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?').then((confirmed) => console.log('User confirmed:', confirmed)).catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  console.log('id', id_fichier);
  
  Swal.fire({
    title:'Supprimer',
    text:'Voulez vous supprimer cet Document ?', 
    confirmButtonText:'Oui',
    cancelButtonText:'Non',
    showCancelButton:true, 
    type:'warning'
    
    
  }).then(result=>{
    if(result.value)
    {
        this.docService.suppdoc(id_fichier).subscribe(data=>{
    let result :any = data; 
    console.log(result); 
    Swal.fire(
      'Supprimé!',
      'Document a été supprimé avec succée',
      'success'
    )
    if(result)
    {
     this.getDocument(); 
    }
  })
    }
  })

}

 
}
