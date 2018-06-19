import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NesAppDropDownComponent} from './component/nes-app-drop-down/nes-app-drop-down.component';
import {AppListComponent} from './component/app-list/app-list.component';
import {NesIndexComponent} from './component/nes-index/nes-index.component';
import {NesWorkflwoStepsComponent} from './component/nes-workflwo-steps/nes-workflwo-steps.component';
import {NesAuthGuardGuard} from './service/routing/nes-auth-guard.guard';
import {NesLoginComponent} from './component/login/nes-login/nes-login.component';
import {AppMenuInlineComponent} from './component/app-menu-inline/app-menu-inline.component';
import {NesDataTableComponent} from './component/nes-data-table/nes-data-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/emcs', canActivate: [NesAuthGuardGuard], pathMatch: 'full'},
  {path: 'login', component: NesLoginComponent},
  {
    path: 'emcs', canActivate: [NesAuthGuardGuard], component: AppMenuInlineComponent, children: [
      {path: 'app', canActivate: [NesAuthGuardGuard], component: AppListComponent},
      {path: 'index', canActivate: [NesAuthGuardGuard], component: NesIndexComponent},
      {path: 'dashboard', canActivate: [NesAuthGuardGuard], component: NesAppDropDownComponent},
      {path: 'steps', canActivate: [NesAuthGuardGuard], component: NesWorkflwoStepsComponent},
      {path: 'dataTable', canActivate: [NesAuthGuardGuard], component: NesDataTableComponent},
    ]
  },
  {path: '**', component: AppMenuInlineComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
