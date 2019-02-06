import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _angularFireAuth: AngularFireAuth
  ){}

  canActivate(): Observable<boolean>{
    return this._angularFireAuth.authState.pipe(map(auth => {
      
      if(!auth){
        this._router.navigate(['/login']);
        return false;
      } else {
        return true;
      }

    }));
  }

}
