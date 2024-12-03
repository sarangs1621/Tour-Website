import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPackagesComponent } from './details-packages.component';

describe('DetailsPackagesComponent', () => {
  let component: DetailsPackagesComponent;
  let fixture: ComponentFixture<DetailsPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
