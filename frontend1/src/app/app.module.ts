import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MessagesComponent } from './messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { apiService } from './services/api.service';
import { ChatsComponent } from './chats/chats.component'
import { UserListComponent } from './user-list/user-list.component'
import { LoaderComponent } from './loader/loader.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MessagesComponent,
    UserListComponent,
    ChatsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
