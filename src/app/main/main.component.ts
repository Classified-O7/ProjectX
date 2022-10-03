import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/Auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authS:AuthService, private router:Router, private toaster:ToastrService) { }

  ngOnInit(): void {
    console.log(this.authS.getS())
    
    if(this.authS.getS() == null)
    {
      this.router.navigateByUrl('/login')
      this.toaster.warning('Tham Jao Chacha', 'Pehle yaha login kro')
    }
  }

}
