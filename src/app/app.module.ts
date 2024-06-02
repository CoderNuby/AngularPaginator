import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
