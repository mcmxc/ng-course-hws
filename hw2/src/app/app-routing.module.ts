import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/signIn/signIn.component';
import { SignUpComponent } from './pages/signUp/signUp.component';
import { DetailsComponent } from './pages/details/details.component';
import { NewArticleComponent } from './pages/newArticle/newArticle.component';
import { UserInfoComponent } from './pages/userInfo/userInfo.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'details', // I believe this path should include some specific car id
    component: DetailsComponent
  },
  {
    path: 'new',
    component: NewArticleComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
