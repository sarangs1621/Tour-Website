import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpackagesComponent } from './subpackages.component';

describe('SubpackagesComponent', () => {
  let component: SubpackagesComponent;
  let fixture: ComponentFixture<SubpackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
