import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './app.footer.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppTopbarComponent } from './app.topbar.component';
import { AppMainComponent } from './app.main.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppFooterComponent,
    AppSidebarComponent,
    AppTopbarComponent,
    AppMainComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ToastModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    ConfirmDialogModule,
    DialogModule
  ],
  exports: [AppMainComponent]
})
export class AppMainModule { }
