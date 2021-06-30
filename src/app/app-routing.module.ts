import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './common-services/auth-guard.service';
import { ChangeDetectService } from './common-services/change-detect.service';

import { BasicNotesComponent } from './components/basic-notes/basic-notes.component';
import { CommandsComponent } from './components/commands/commands.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RoutingComponent } from './components/routing/routing.component';
import { LandingViewComponent } from './components/routing/landing-view/landing-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { LocalReferenceComponent } from './components/local-reference/local-reference.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { NestedRouteComponent } from './components/routing/nested-route/nested-route.component';
import { NestedChildComponent } from './components/routing/nested-route/nested-child/nested-child.component';
import { NestedChildTwoComponent } from './components/routing/nested-route/nested-child/nested-child-two/nested-child-two.component';
import { RouteGaurdComponent } from './components/route-gaurd/route-gaurd.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
 
const routes: Routes = [
  {
    path: '',
    component: BasicNotesComponent
  },
  {
    path: 'useful-commands',
    component: CommandsComponent
  },
  {
    path: 'typescript',
    component: TypescriptComponent
  },
  {
    path: 'ng-if',
    component: NgifComponent,
    //canActivate: [AuthGuardService]
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent
  },
  {
    path: 'ng-switch',
    component: NgswitchComponent
  },
  {
    path: 'ng-for',
    component: NgforComponent
  },
  {
    path: 'ng-style',
    component: NgstyleComponent
  },
  {
    path: 'ng-class',
    component: NgclassComponent
  },
  {
    path: 'data-binding',
    component: DataBindingsComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'routing',
    component: RoutingComponent
  },

  // Routing
  {
    path: 'normal-redirect',
    component: LandingViewComponent
  },
  {
    path: 'local-redirect',
    redirectTo: 'useful-commands',
    pathMatch: 'full'
  },
  {
    path: 'absolute-redirect',
    redirectTo: '/useful-commands'
  },
  {
    path: 'route-parameter',
    component: LandingViewComponent
  },
  {
    path: 'route-parameter/:id/:name',
    component: LandingViewComponent
  },
  {
    path: 'route-static-data',
    component: LandingViewComponent,
    data: {language: 'eng', country: 'ind'}
  },
  {
    path: 'nested-routing',
    component: NestedRouteComponent,
    children: [
      {
        //level 1
        path: ':userId/:userName',
        component: NestedChildComponent,
        children: [
          {
            //level 2
            path: 'skill/:techId',
            component: NestedChildTwoComponent
          }
        ]
      }
    ]
  },
  {
    path: 'preserve-query-string/:dempParam/block/:blockName',
    component:LandingViewComponent
  },
  {
    path: 'merge-query-string/:dempParam/block/:blockName',
    component:LandingViewComponent
  },
  //route-gaurds
  {
    path: 'route-guards',
    component: RouteGaurdComponent,
    canActivateChild: [AuthGuardService],
    canDeactivate: [ChangeDetectService],
    children: [
      {
        path: 'child-1/:id/:name',
        component:LandingViewComponent
      },
      {
        path: 'child-2/:id/:name',
        component:LandingViewComponent
      }
    ]
  },
  {
    path: 'after-login-access',
    component: LandingViewComponent,
    canActivate: [AuthGuardService]
  },
  // end routing
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'output',
    component: OutputComponent
  },
  {
    path: 'local-referance',
    component: LocalReferenceComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },

  // 404 redirection
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
