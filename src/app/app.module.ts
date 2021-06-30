import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ItemsService } from './sidebar/service/items.service';
import { DataService as ngIfDataService } from './components/ngif/services/data.service';
import { DataService as ngSwitchDataService } from './components/ngswitch/services/data.service';
import { UsersService as commonUserDataService } from './common-services/users.service';
import { AuthServiceService } from './common-services/auth-service.service';
import { AuthGuardService } from './common-services/auth-guard.service';
import { ChangeDetectService } from './common-services/change-detect.service';
import { FirebaseServiceService } from './common-services/firebase-service.service';
import { HttpInterseptorService } from './common-services/http-interseptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import { GenderSalutationPipe } from './custom-pipes/gender-salutation.pipe';
import { DefaultImagePipe } from './custom-pipes/default-image.pipe';
import { StringLengthPipe } from './custom-pipes/string-length.pipe';
import { FilterJsonDataPipe } from './custom-pipes/filter-json-data.pipe';
import { RoutingComponent } from './components/routing/routing.component';
import { LandingViewComponent } from './components/routing/landing-view/landing-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InputComponent } from './components/input/input.component';
import { InputChildComponent } from './components/input/input-child/input-child.component';
import { InputChildTwoComponent } from './components/input/input-child-two/input-child-two.component';
import { InputChildThreeComponent } from './components/input/input-child-three/input-child-three.component';
import { InputChildFourComponent } from './components/input/input-child-four/input-child-four.component';
import { OutputComponent } from './components/output/output.component';
import { AddUserComponent } from './components/output/add-user/add-user.component';
import { ShowUsersComponent } from './components/output/show-users/show-users.component';
import { LocalReferenceComponent } from './components/local-reference/local-reference.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { HighlightTextOneDirective } from './directives/highlight-text-one.directive';
import { HighlightTextTwoDirective } from './directives/highlight-text-two.directive';
import { HighlightTextEventOneDirective } from './directives/highlight-text-event-one.directive';
import { HighlightTextEventTwoDirective } from './directives/highlight-text-event-two.directive';
import { HighlightTextDynamicEventDirective } from './directives/highlight-text-dynamic-event.directive';
import { NestedRouteComponent } from './components/routing/nested-route/nested-route.component';
import { NestedChildComponent } from './components/routing/nested-route/nested-child/nested-child.component';
import { NestedChildTwoComponent } from './components/routing/nested-route/nested-child/nested-child-two/nested-child-two.component';
import { RouteGaurdComponent } from './components/route-gaurd/route-gaurd.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BasicNotesComponent,
    CommandsComponent,
    TypescriptComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    NgstyleComponent,
    NgclassComponent,
    DataBindingsComponent,
    PipesComponent,
    GenderSalutationPipe,
    DefaultImagePipe,
    StringLengthPipe,
    FilterJsonDataPipe,
    RoutingComponent,
    LandingViewComponent,
    NotFoundComponent,
    InputComponent,
    InputChildComponent,
    InputChildTwoComponent,
    InputChildThreeComponent,
    InputChildFourComponent,
    OutputComponent,
    AddUserComponent,
    ShowUsersComponent,
    LocalReferenceComponent,
    LifecycleComponent,
    ChildComponent,
    DirectiveComponent,
    HighlightTextOneDirective,
    HighlightTextTwoDirective,
    HighlightTextEventOneDirective,
    HighlightTextEventTwoDirective,
    HighlightTextDynamicEventDirective,
    NestedRouteComponent,
    NestedChildComponent,
    NestedChildTwoComponent,
    RouteGaurdComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    LoadingSpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterseptorService,
      multi: true
    },
    ItemsService,
    ngIfDataService,
    ngSwitchDataService,
    commonUserDataService,
    AuthServiceService,
    AuthGuardService,
    ChangeDetectService,
    FirebaseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    console.log('App Module Constructor Load');
  }
}
