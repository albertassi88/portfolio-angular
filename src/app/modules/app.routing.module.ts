import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { AboutComponent } from './about/components/about/about.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre", component: AboutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
