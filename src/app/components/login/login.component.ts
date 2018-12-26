import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthserviceService) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }
  
  loginUser(){
    this.authService.login(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['cuerpo']);
    }).catch(err => console.log('err', err.message));
  }

}
