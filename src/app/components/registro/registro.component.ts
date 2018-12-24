import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private authService: AuthserviceService) { }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  registroUser(){
    this.authService.registro(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['cuerpo']);
    }).catch(err => console.log('err', err.message));
  }

}
