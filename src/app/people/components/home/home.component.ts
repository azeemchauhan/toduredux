import { Component, OnInit } from '@angular/core';
import { People, PeopleService, PeopleResponse } from '../../services';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map, filter, debounceTime, distinct, tap, flatMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'my-people-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PeopleHomeComponent implements OnInit {
  loading: boolean = false;
  private cache = [];
  private pageByManual$ = new BehaviorSubject(1);
  private itemHeight = 40;
  private numberOfItems = 10;
  private pageByScroll$ = fromEvent(window, "scroll")
    .pipe(
      map(() => window.scrollY),
      filter(current =>
        current >= document.body.clientHeight - window.innerHeight),
      debounceTime(200),
      distinct(),
      map(y => Math.ceil(
        (y + window.innerHeight) / (this.itemHeight * this.numberOfItems)
      )
      )
    );
  private pageByResize$ = fromEvent(window, "resize")
    .pipe(
      debounceTime(200),
      map(_ => Math.ceil(
        (window.innerHeight + document.body.scrollTop) /
        (this.itemHeight * this.numberOfItems)
      ))
    )
  private pageToLoad$ = merge(
    this.pageByManual$,
    this.pageByScroll$,
    this.pageByResize$)
    .pipe(
      distinct(),
      filter(page => this.cache[page - 1] === undefined)
    );
  itemResults$:Observable<People[]> = this.pageToLoad$
    .pipe(
      flatMap((page: number) => {
        return this.service.getPeople(page).pipe(
          map((response: PeopleResponse) => <People[]>response.results),
          tap((response:People[]) => {
            this.cache[page - 1] = response;
            if ((this.itemHeight * this.numberOfItems * page) < window.innerHeight) {
              this.pageByManual$.next(page + 1);
            }
          })
        )
      }),
      map(() => {
        this.loading = true;
        return _.flatMap(this.cache)
      })
    );
  constructor(private service: PeopleService) { }
  ngOnInit(): void {

  }
}
