import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {ActivatedRoute } from '@angular/router';
import {UtilityService} from '../providers/utility.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent implements OnInit {
  missionInfo$: Observable<any>;
  constructor(private utilityService: UtilityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.getData(params);
    });
  }

  getData(params?: any) {
    this.missionInfo$ = this.utilityService.getSpaceXInfo(params).pipe(shareReplay(1));
  }

}
