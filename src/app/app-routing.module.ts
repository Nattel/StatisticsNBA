import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { TwitterComponent } from './twitter/twitter.component';
import { CosComponent } from './cos/cos.component';


const routes: Routes = [
  { path: 'analysis', component: AnalysisComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'cos', component: CosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
