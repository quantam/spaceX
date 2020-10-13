import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';

import { MissionListComponent } from './mission-list.component';
import { UtilityService } from '../providers/utility.service';

describe('MissionListComponent', () => {
  let component: MissionListComponent;
  let fixture: ComponentFixture<MissionListComponent>;
  let utilityService: UtilityService;
  let activatedRoute: ActivatedRoute;
  const queryParamData: any = { launch_year: 2000};
  const queryParams = of(queryParamData);

  const activatedRouteMock = {
    queryParams
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UtilityService, {
        provide: ActivatedRoute,
        useValue: activatedRouteMock
      }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionListComponent);
    component = fixture.componentInstance;
    utilityService = TestBed.get(UtilityService);
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
