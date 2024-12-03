import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PackageType} from "../../Interfaces/packageType";
import {ActivatedRoute, Router} from "@angular/router";
import {PackagesService} from "../../Services/packages.service";
import {Observable, Subscription, switchMap, tap} from "rxjs";
import {Subproduct} from "../../Interfaces/Subproduct";

@Component({
  selector: 'app-subpackages',
  templateUrl: './subpackages.component.html',
  styleUrls: ['./subpackages.component.scss']
})
export class SubpackagesComponent implements OnInit, OnDestroy {

  subId!: string | null
  subscription!: Subscription;
  eachPackages!: Observable<Subproduct[]>;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(value => {
      this.subId = value.get('label');
      this.eachPackages = this.packageService.getData(this.subId);
    })
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  details(id:any){
    this.router.navigate([`details`],
      {relativeTo: this.route, queryParams:{subId: id}})
  }
}
