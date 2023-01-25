import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { withLatestFrom } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  id:any;
  constructor(private userService:UserService ,private activatedRoute:ActivatedRoute){
    this.id = this.activatedRoute.snapshot.params['id']
  }

  loginForm = new FormGroup({
    name:new FormControl('',[Validators.required , Validators.pattern(/^[a-zA-Z]{3,10}$/)]),
    email:new FormControl('',[Validators.email, Validators.required] ),
    password:new FormControl('' , [Validators.minLength(3),Validators.maxLength(10) , Validators.required])
  })

  get getName(){
   return this.loginForm.controls['name']
  }

  get getEmail(){
    return this.loginForm.controls['email']
  }

  get getPassword(){
    return this.loginForm.controls['password']
  }

  login(){
  if(this.loginForm.status == 'VALID'){
    if(this.id){
      this.userService.editeUser(this.id,this.loginForm.value).subscribe((response)=>{
        console.log(response);
      })
    }else{
      this.userService.addUser(this.loginForm.value).subscribe((response)=>{
        console.log(response);
      })
    }

  }else{
    console.log('Error !!');
  }
  console.log(this.loginForm);

  }
}
