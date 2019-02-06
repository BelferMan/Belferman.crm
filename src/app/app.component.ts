import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAuth: boolean = false;
  userEmail: string;

  constructor(
    private _authService: AuthService
  ){}

  ngOnInit(): void{
    this._authService.getAuth().subscribe( auth =>{

      if(auth) {
        this.isAuth = true;
        this.userEmail = auth.email;
      }

    });
  }
}
