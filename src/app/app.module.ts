import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppBreadcrumbComponent} from './component/app-breadcrumb/app-breadcrumb.component';
import {AppMenuInlineComponent} from './component/app-menu-inline/app-menu-inline.component';
import {AppListComponent} from './component/app-list/app-list.component';
import {NesAppDropDownComponent} from './component/nes-app-drop-down/nes-app-drop-down.component';
import {NesIndexComponent} from './component/nes-index/nes-index.component';
import {NesWorkflwoStepsComponent} from './component/nes-workflwo-steps/nes-workflwo-steps.component';
import {NesNotificationService} from './service/nes-notification.service';
import {NesPermissionCheckService} from './service/permission/nes-permission-check.service';
import {AngularDraggableModule} from 'angular2-draggable';
import {NesAuthService} from './service/auth/nes-auth.service';
import {NesAuthGuardGuard} from './service/routing/nes-auth-guard.guard';
import {NesLoginComponent} from './component/login/nes-login/nes-login.component';
import {NesButtonComponent} from './component/nes-workflwo-steps/nes-button/nes-button/nes-button.component';
import {NesDataTableComponent} from './component/nes-data-table/nes-data-table.component';
import {NesHorizontalMenuComponent} from './component/nes-horizontal-menu/nes-horizontal-menu.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {NesMenuPipe} from './pipe/nes-menu.pipe';
import {NesNoticeEmitterService} from './service/emitter/nes-notice-emitter.service';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { BankAccountDirective } from './directive/bank-account.directive';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    AppBreadcrumbComponent,
    AppMenuInlineComponent,
    AppListComponent,
    NesAppDropDownComponent,
    NesIndexComponent,
    NesWorkflwoStepsComponent,
    NesLoginComponent,
    NesButtonComponent,
    NesDataTableComponent,
    NesHorizontalMenuComponent,
    NesMenuPipe,
    BankAccountDirective,
  ],
  entryComponents: [NesButtonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    AngularDraggableModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [NesNotificationService, NesPermissionCheckService, NesAuthService, NesAuthGuardGuard, NesNoticeEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
