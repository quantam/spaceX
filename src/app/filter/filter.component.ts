import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UtilityService } from '../providers/utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  launchYear: number[] = [];
  params: IParams;
  constructor(private router: Router, private utilityService: UtilityService) { }

  ngOnInit() {
    for (let i = 2006; i < 2021; i++) {
      this.launchYear.push(i);
    }
  }

  filterData(type, value) {
    this.params = this.utilityService.buildParams(type, value);
    this.router.navigate(['/mission'], { queryParams: this.params});
  }
}


export interface IParams {
  launch_year?: number;
  launch_success?: boolean;
  launch_landing?: boolean;
}
