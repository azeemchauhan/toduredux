

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
export interface People {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}
export interface PeopleResponse {
    count: number;
    next: string;
    previous: null;
    results: People[];
}

@Injectable({
    providedIn: 'root',
})
export class PeopleService {
    constructor(private http: HttpClient) { }

    getPeople(page:number): Observable<PeopleResponse> {
        const PEOPLE_API = "https://swapi.co/api/people/?page="+page
        return this.http.get<PeopleResponse>(PEOPLE_API)
            .pipe(map((response: PeopleResponse) => response))
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}