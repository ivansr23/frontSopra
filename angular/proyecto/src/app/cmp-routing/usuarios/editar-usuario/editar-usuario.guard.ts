import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';


export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | UrlTree | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;
}
@Injectable({
  providedIn: 'root'
})
export class EditarUsuarioGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> 
                | Promise<boolean | UrlTree> {
    return component.canDeactivate ?  component.canDeactivate() : true;
  }
  // anActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
}
