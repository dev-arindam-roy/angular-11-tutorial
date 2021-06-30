import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommandsComponent } from '../components/commands/commands.component';

export interface IDeactivateGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>
}

@Injectable({
  providedIn: 'root'
})

export class ChangeDetectService implements CanDeactivate<IDeactivateGuard> {

  constructor() { }

  canDeactivate(
    component: IDeactivateGuard,
    route: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return component.canExit();
  }
}
