import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { StaffRoutingModules } from './staff.routing';
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
    AddStaffComponent,
    ManageStaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModules,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [DataService]
})
export class StaffModule { }
