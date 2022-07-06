import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:any
  public password:any

  constructor( 
    public router: Router,
    public loginService: LoginService,
    private http: HttpClient
    ) { 
   
  }

  ngOnInit() {
    try{
      this.loginService.auth.currentUser.then(res => {
        this.router.navigateByUrl('biere')
      });
    }catch(err){
      console.log(err);
    }
  }

  login() {
    console.log(this.password);

    this.loginService.loginWithEmail({ email: this.email, password: this.password }).then((res) => {
        if (res.user.uid) {
          this.router.navigateByUrl('biere')
        }else{
          console.log("Wrong Credentials")
        }
      });
  }
  
}
