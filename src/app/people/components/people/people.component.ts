import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../services';


@Component({
  selector: 'my-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input("people") people: People;
  constructor() { 
    console.log(this.people)
  }
  ngOnInit(): void {
  }
}

