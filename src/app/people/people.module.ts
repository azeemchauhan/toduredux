import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleHomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
@NgModule({
  declarations: [ PeopleHomeComponent, PeopleComponent ],
  imports: [ CommonModule ],
  exports: [ PeopleHomeComponent ]
})
export class PeopleModule { }
