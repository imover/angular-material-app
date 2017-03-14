import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo.data';

import { routes } from './app.router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoModule } from './todo/todo.module';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    CardsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProfileComponent,
    BlogComponent,
    SidebarComponent,
    SidebarRightComponent,
    CustomizerComponent,
    SigninComponent,
    SignupComponent,
    PageNotFoundComponent,
    TodoModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routes,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
