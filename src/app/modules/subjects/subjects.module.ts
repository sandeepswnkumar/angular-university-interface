import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSubjectComponent } from './manage-subject/manage-subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectRoutingModules } from './subject.routing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from './../../admin/tables/data.service';



@NgModule({
  declarations: [
    ManageSubjectComponent,
    AddSubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModules,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [DataService]
})
export class SubjectsModule { }
