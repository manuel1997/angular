import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {map} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public afAuth: AngularFireAuth) { }

registro (email: string, password: string) {
  return new Promise((resolve, reject)=>{
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(resultado =>{
      resolve(resultado);
    },error =>{
      reject(error);
    });
  });
 }


 Getinfo(){
   return this.afAuth.authState.pipe(map(auth => auth));
 }

 login (email: string, password: string) {
  return new Promise((resolve, reject)=>{
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(resultado =>{
      resolve(resultado);
    },error =>{
      reject(error);
    });
  });
 }

 logout() {
  this.afAuth.auth.signOut();
}

}