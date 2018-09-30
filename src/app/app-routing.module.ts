import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './components/pages/introduction/introduction.component';

import { ProjectListComponent } from './components/pages/project-list/project-list.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'projects', component: ProjectListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
