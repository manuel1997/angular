import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthserviceService } from '../services/authservice.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router,
  private Afauth: AngularFireAuth,
  private servis: AuthserviceService
){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.servis.Getinfo().subscribe(resultado =>{
        if(!resultado){
          this.router.navigate(['/login']);
          return false;
        }
      });
    return true;
  }
}
