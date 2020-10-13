import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { UtilityService } from './utility.service';
import { EMPTY, Observable, of } from 'rxjs';

export class HttpMock {
  get<T>(url: string, params?: any): Observable<T> {
    return EMPTY;
  }
}

let utilityService: UtilityService;
let httpMock: HttpMock;
describe('UtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: HttpMock, useClass: HttpMock}]
    });
    utilityService = TestBed.get(UtilityService);
    httpMock = TestBed.get(HttpMock);
  });

  it('should be created', () => {
    expect(utilityService).toBeTruthy();
  });

  it('should built params', () => {
    const params = utilityService.buildParams('launch_year', 2000);
    expect(params).toEqual({launch_year: 2000});
  });

  it('should get data', () => {
    spyOn(httpMock, 'get').and.returnValue(of({launch_year: 2000}));
    utilityService.getSpaceXInfo().subscribe(res => expect(res).toBeDefined());
  });
});
