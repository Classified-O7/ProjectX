import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private Router : Router, private toastr : ToastrService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    
  }
  login(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      if(this.loginForm.value.email == 'a@a.a' && this.loginForm.value.pass == 'a')
    {
      this.toastr.success('Welcome', 'Login Successful')
      this.Router.navigateByUrl('/layout/main')
    }
    else
    {
      this.toastr.error('Error', 'Invalid Credentials')
    }
    }, 2000);
    
  }

}
