import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectListComponent } from './components/pages/project-list/project-list.component';
import { IntroductionComponent } from './components/pages/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsetsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
