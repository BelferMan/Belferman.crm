import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  @Input()
  userEmail: string;

  @Input()
  isAuth: boolean;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLogOut(e): void {
    e.preventDefault();
    this._authService.logout();
    window.location.reload();
  }

}
