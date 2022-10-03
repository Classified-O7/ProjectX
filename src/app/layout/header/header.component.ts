import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authS:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  checkit()
  {
    this.authS.destroyS()
    this.router.navigateByUrl('/login')
  }
}
