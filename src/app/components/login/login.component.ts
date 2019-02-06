import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _title: Title,
    private _authService: AuthService,
    private _fms: FlashMessagesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Company Crm | Login Page');
    this._authService.getAuth().subscribe(auth => {
      if (auth) this._router.navigate(['/']);
    })
  }

  onSubmit({ value, valid }): void {
    if (valid) {
      this._authService.login(value.email, value.password).then((res) => {
        this._fms.show('You are now logged in!', {
          cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center',
          timeout: 3000
        });
        this._router.navigate(['/']);
      }).catch((err) => {
        this._fms.show(err.message, {
          cssClass: 'fixed-top m-auto bg-danger w-50 text-white text-center',
          timeout: 3000
        });
      });
    }
  }

}
