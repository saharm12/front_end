import { Component, OnInit,Inject,ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef} from '@angular/material';
import { Programme} from '../programme/prog.model';
import { ProgrammeService   } from 'app/services/programme.service';
import {HttpClient} from '@angular/common/http' ;

@Component({
  selector: 'app-editprog',
  templateUrl: './editprog.component.html',
  styleUrls: ['./editprog.component.scss']
})
export class EditprogComponent implements OnInit {
  progModel :any;
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  Id:number;
  res: any;  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http:HttpClient,private progService:ProgrammeService,public dialogbox: MatDialogRef<EditprogComponent> ) {
    
    this.mycontent = `<p>My html content</p>`;
   }
   @ViewChild("myckeditor") ckeditor: any;
  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      forcePasteAsPlainText: true,
      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
      ],
      removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    };
    
    console.log(this.data)
    let user = this.data.info ;
    console.log(user);
       this.progModel = user[0].details_programme; 
    console.log("form ",this.progModel);
   

  }
  
  onChange($event: any): void {
    console.log("onChange", $event);
  }

  onClose(){
    //console.log("form en close ",this.juryModel);
    this.dialogbox.close();
    //this.ngOnInit();
  
  }
prog:Programme;
  updateprog(p : Programme){
    console.log('modified speaker',this.progModel)
 this.progService.putprog(p).subscribe(data => {
      let result : any = data; 
      if(result)
      {
        console.log("ok");
      }
    })
  }
    }