import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApplicationSetting } from '../applicationSetting';
import { address } from './Address';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  constructor(private http: HttpClient) { }

  getAddresses(): Observable<address[]> {
    return this.http.get<address[]>(ApplicationSetting.baseUrl + 'api/Addresses').pipe(
      map((res: address[]) => res)
    );
  }

  getAddress(id: string): Observable<address> {
    return this.http.get<address>(ApplicationSetting.baseUrl + 'api/Addresses/' + id).pipe(
      map((res: address) => res)
    );
  }

  deleteAddress(id: string): Observable<address> {
    return this.http.delete<address>(ApplicationSetting.baseUrl + 'api/Addresses/' + id).pipe(
      map((res: address) => res)
    );
  }

  postAddress(address: address): Observable<address> {
    return this.http.post<address>(ApplicationSetting.baseUrl + 'api/Addresses', address).pipe(
      map((res: address) => res)
    );
  }

  putAddress(id: string, address: address): Observable<address> {
    return this.http.put<address>(ApplicationSetting.baseUrl + 'api/Addresses/' + id, address).pipe(
      map((res: address) => res)
    );
  }
}
