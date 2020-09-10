import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecitatorPageComponent } from './recitator-page/recitator-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayingPageComponent } from './playing-page/playing-page.component';


const routes: Routes = [
  {path: 'home', component: RecitatorPageComponent},
  {path: 'playing', component: PlayingPageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
