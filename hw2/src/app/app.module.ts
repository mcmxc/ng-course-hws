import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignInComponent } from './pages/signIn/signIn.component';
import { SignUpComponent } from './pages/signUp/signUp.component';
import { DetailsComponent } from './pages/details/details.component';
import { NewArticleComponent } from './pages/newArticle/newArticle.component';
import { UserInfoComponent } from './pages/userInfo/userInfo.component';

import { NavComponent } from './pages/home/nav/nav.component';
import { FilterComponent } from './pages/home/filter/filter.component';
import { CarCardComponent } from './pages/home/carCard/carCard.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    DetailsComponent,
    NewArticleComponent,
    UserInfoComponent,
    CarCardComponent,
    NavComponent,
    FilterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  exports: [], // array of all components, directives, pipes, which we want to export from module
  bootstrap: [AppComponent]
})
export class AppModule {}
