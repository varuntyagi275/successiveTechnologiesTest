import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  singUpForm:FormGroup
  submitted: boolean;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.singUpForm=this.fb.group({
      fName:['',Validators.required],
      lName:['',Validators.required],
      email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password:['',Validators.required]
    })
  }


  save(){
    this.submitted=true
    if(this.singUpForm.valid){
      console.log(this.singUpForm.value)
    }
  }

}
