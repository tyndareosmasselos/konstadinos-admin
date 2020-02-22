import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { }
  
  register(value: any){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then((user: any) => {
        this.afs.collection("users").doc(user.user.uid).set({
          email: value.email,
          uid: user.user.uid
        })
        resolve(user);
      }, err => reject(err))
    })
  }

  login(value: any){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res)
        }, err => reject(err))
    })
  }
}
