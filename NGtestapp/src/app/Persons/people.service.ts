import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApplicationSetting } from '../applicationSetting';
import { person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<person[]> {
    return this.http.get<person[]>(ApplicationSetting.baseUrl + 'api/People').pipe(
      map((res: person[]) => res)
    );
  }

  getPerson(id: string): Observable<person> {
    return this.http.get<person>(ApplicationSetting.baseUrl + 'api/People/' + id).pipe(
      map((res: person) => res)
    );
  }

  deletePerson(id: string): Observable<person> {
    return this.http.delete<person>(ApplicationSetting.baseUrl + 'api/People/' + id).pipe(
      map((res: person) => res)
    );
  }

  postPerson(person: person): Observable<person> {
    return this.http.post<person>(ApplicationSetting.baseUrl + 'api/People', person).pipe(
      map((res: person) => res)
    );
  }

  putPerson(id: string, person: person): Observable<person> {
    return this.http.put<person>(ApplicationSetting.baseUrl + 'api/People/' + id, person).pipe(
      map((res: person) => res)
    );
  }

}
