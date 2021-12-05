import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class AboutModule { }
