import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  form:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      collegeName: ['', Validators.required ],
      collegeDirName: ['', Validators.required ],
      name1: ['', Validators.required ],
      name2: ['', Validators.required ],
      name3: ['', Validators.required ],
      name4: ['', Validators.required ],
      name5: ['', Validators.required ],
      date: ['', Validators.required ],
    })
    
  }


  submitForm(){
    console.log("Form Submitted : ",this.form.value)
  }

}
