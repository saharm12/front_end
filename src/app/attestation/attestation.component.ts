import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  FileUploader  } from 'ng2-file-upload';
import {Attesation} from '../attestation/attestation.model'
import {ParticipantService} from '../services/participants.service'
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.scss']
})
export class AttestationComponent implements OnInit {
  public uploader:FileUploader ;
  uploadedFile:File ;
  ModelAtt: Attesation

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private toastr: ToastrService,private partServ : ParticipantService,private http:HttpClient,public dialogbox: MatDialogRef<AttestationComponent>) {
   }

  ngOnInit() {
   
  }
  onClose(){
    this.dialogbox.close();
   
  }
  showSucess()
{this.toastr.success('Attesation a été envoyé avec succés')}

  fileChange(element) {
    this.uploadedFile = element.target.files[0];
 } 
  SendAttestation(id:number){
    let data = new FormData(); 

    console.log(this.uploadedFile)
    console.log(localStorage.getItem("idP"))
    data.append('image',this.uploadedFile); 

    this.http.post('http://localhost:3000/participant/AddAttestation/'+localStorage.getItem("idP")+"/"+localStorage.getItem("email"),data).subscribe(data=>{
      let result:any =data; 
        console.log(result);
        this.showSucess();

      })

  }
}
//SendAttestation(){
 // let data = new FormData();
 // data.append('image',this.uploadedFile); 
  //this.partServ.Postpart(data).subscribe(data=>{
  ///  let result :any = data; 
   // if(result)
   // { 
     
     // this.onClose();
     // console.log("ok")
      
    //}
  //})
  
//}
 //}



