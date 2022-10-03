import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../shared/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      email:new FormControl(),
      pass:new FormControl()
    }
  )

  constructor(private Router : Router, private toastr : ToastrService, private spinner:NgxSpinnerService, private authS:AuthService) { }

  ngOnInit(): void {
    console.log(this.authS.getS())
    if(this.authS.getS() != null)
    {
      this.Router.navigateByUrl('/layout/main')
    }
  }
  login(){
      this.spinner.show();
      if(this.loginForm.value.email == 'a@a.a' && this.loginForm.value.pass == 'a')
      {
        this.authS.createS(this.loginForm.value.email)
        this.toastr.success('Welcome', 'Login Successful')
        this.spinner.hide()
        this.Router.navigateByUrl('/layout/main')
      }
      else
      {
        this.toastr.error('Error', 'Invalid Credentials')
        this.spinner.hide()
        
      }
  }

}
