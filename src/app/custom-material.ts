import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';


import {MatNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatCardModule,
        MatNativeDateModule 
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatCardModule,
   MatNativeDateModule ]
})
export class CustomMaterialModule { }
