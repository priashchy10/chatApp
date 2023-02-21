import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { AppFooterComponent } from '../app/app.footer.component';
import { AppMainComponent } from '../app/app.main.component';
import { AppSidebarComponent } from '../app/app.sidebar.component';
import { AppTopbarComponent } from '../app/app.topbar.component';
import { ToastModule } from 'primeng/toast'
import { AppMainModule } from './app.main.module';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppMainComponent,
    AppSidebarComponent,
    AppTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    AppMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
