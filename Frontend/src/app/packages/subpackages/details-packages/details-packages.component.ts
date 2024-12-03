import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PackagesService} from "../../../Services/packages.service";
import {Observable, Subscription, tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {BookNowComponent} from "./book-now/book-now.component";


interface Day {
  title: string;
  plan: string;
}
@Component({
  selector: 'app-details-packages',
  templateUrl: './details-packages.component.html',
  styleUrls: ['./details-packages.component.scss']
})


export class DetailsPackagesComponent implements OnInit, OnDestroy {

  label!: string | null;
  id!: string | null;
  details$!: Observable<any>;
  details!: any[];
  subscription?: Subscription;
  package!: Observable<any>;
  eachPackage!: string;
  des!: string;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(params=> {
      this.label = params.get('label');
      this.id = params.get('id');
      this.package = this.packageService.getEachPackage(this.label, this.id);
    })
    this.subscription = this.package.pipe(tap(val=>{
      this.eachPackage = val.place;
      this.des = val.description;
      this.details = val.details[0];
      }
    )).subscribe()
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  openBookModal(): void {
    this.matDialog.open(BookNowComponent, {
      width: '720px',
      closeOnNavigation: true
    })
  }
}

