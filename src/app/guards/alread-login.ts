import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { cache } from "bfast";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AlreadyLoginGuard implements CanActivate {
  constructor(private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return cache()
      .get("user")
      .then((u: any) => {
        if (u && u.name) {
          this.router.navigateByUrl("/login");
          return false;
        }
        return true;
      });
  }
}
