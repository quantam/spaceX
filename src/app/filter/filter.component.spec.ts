import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { FilterComponent } from './filter.component';
import { UtilityService } from '../providers/utility.service';


describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let utilityService: UtilityService;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: Router, useValue: routerSpy }, UtilityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    utilityService = TestBed.get(UtilityService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate launch year filter', () => {
    expect(component.launchYear.length).toEqual(15);
  });

  it('should apply launch success filter and navigate', () => {
    spyOn(utilityService, 'buildParams').and.returnValue({launch_success : true});
    component.filterData('launch_success', true);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/mission'], {queryParams: {launch_success : true}});
  });
});
