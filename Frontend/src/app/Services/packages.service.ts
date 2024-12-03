import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Product} from "../Interfaces/Product";
import {Subproduct} from "../Interfaces/Subproduct";
import {Day} from "./Day";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  httpUrl = "http://localhost:3200";

  constructor(private http: HttpClient,
              private fireDataBase: AngularFireDatabase) {
  }
  getFireDataTest(): Observable<Product[]> {
    return this.fireDataBase.list('/').valueChanges().pipe(
      map((val: unknown[]) => val as Product[])
    );
  }

  getData(label: string | null): Observable<Subproduct[]> {
    return this.fireDataBase.list(`/${label}/packages`).valueChanges().pipe(
      map((val: unknown) => val as Subproduct[])
    );
  }

  getEachPackage(label: string | null, id: string | null): Observable<any> {
    return this.fireDataBase.object(`${label}/packages/${id}/`).valueChanges()
  }
}
