import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/Auth/auth.service';
@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthGuard implements CanActivate{
    constructor(private authservice:AuthService,
        private router:Router,
        private toaster:ToastrService){}
    canActivate():boolean{
        if(this.authservice.getS() !=null)
        {
            return true
        }
        else
        {
            this.router.navigateByUrl('/login')
            this.toaster.warning('pehle login kro','Tham Jao Chacha' )
            return false
        }
    }
}