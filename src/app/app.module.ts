import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectListComponent } from './components/pages/project-list/project-list.component';
import { IntroductionComponent } from './components/pages/introduction/introduction.component';
import { WorkExperienceComponent } from './components/pages/work-experience/work-experience.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { SkillsService } from './services/skills.service';
import { SkillAreaSelectorComponent } from './components/skill-area-selector/skill-area-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsetsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,
    IntroductionComponent,
    WorkExperienceComponent,
    ContactComponent,
    SkillAreaSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
