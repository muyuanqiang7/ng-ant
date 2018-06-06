import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NesAppDropDownComponent} from './component/nes-app-drop-down/nes-app-drop-down.component';
import {AppListComponent} from './component/app-list/app-list.component';
import {NesIndexComponent} from './component/nes-index/nes-index.component';

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'app', component: AppListComponent},
  {path: 'index', component: NesIndexComponent},
  {path: 'dashboard', component: NesAppDropDownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
