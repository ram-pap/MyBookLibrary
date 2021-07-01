import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../service/auth/authentication.service'

@Injectable()
export class AuthGaurd implements  CanActivate{
    constructor(private router: Router,private authService: AuthenticationService){

    }
    canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot){
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}