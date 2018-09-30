import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './components/pages/introduction/introduction.component';
import { ProjectListComponent } from './components/pages/project-list/project-list.component';
import { WorkExperienceComponent } from './components/pages/work-experience/work-experience.component';
import { ContactComponent } from './components/pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
