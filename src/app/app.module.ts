import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppBreadcrumbComponent} from './component/app-breadcrumb/app-breadcrumb.component';
import {AppMenuInlineComponent} from './component/app-menu-inline/app-menu-inline.component';
import {AppListComponent} from './component/app-list/app-list.component';
import { NesAppDropDownComponent } from './component/nes-app-drop-down/nes-app-drop-down.component';
import { NesIndexComponent } from './component/nes-index/nes-index.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    AppBreadcrumbComponent,
    AppMenuInlineComponent,
    AppListComponent,
    NesAppDropDownComponent,
    NesIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
