import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    TopnavComponent,
    ContactComponent,
    AboutComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([{
      path : '' ,
      component : HomeComponent
    },
    {
      path : 'home' ,
      component : HomeComponent
    },
    {
      path : 'projects' ,
      component : ProjectsComponent
    },
    {
      path : 'project/:id' ,
      component : ProjectDetailComponent
    },
    {
      path : 'about' ,
      component : AboutComponent
    },
    {
      path : 'contact' ,
      component : ContactComponent
    }
  ])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
