import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public islogin:boolean;
  public emailUser:string;

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
    this.authService.Getinfo().subscribe(auth =>{
      if(auth){
        this.islogin = true;
        this.emailUser = auth.email;
      }else{
        this.islogin = false;
      }
    })
  }

  logoutuser(){
    this.authService.logout();
  }

}
