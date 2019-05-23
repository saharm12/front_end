import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatDatepicker, MatDatepickerModule } from '@angular/material';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { MaterialModule } from 'app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule, 
    FormsModule,
        ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent, 
  
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    NgbModule,
    MatInputModule,
    MatRippleModule,
   
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  schemas:[]
})
export class ComponentsModule { }
