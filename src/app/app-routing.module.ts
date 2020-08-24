import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'app-home-page', component: HomePageComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-projects', component: ProjectsComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-home-page', component: HomePageComponent },
  { path: '', redirectTo: '/app-home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
