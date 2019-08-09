import { Component, OnInit, Input, Output } from '@angular/core';
import { UtilService } from '../../services/util/util.service';
import { DataService } from '../../services/data/data.service';
import { first } from 'rxjs/operators';
import { Entry } from '../../models/entry';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [],
})
export class ResultsComponent implements OnInit {
  _results: Entry[] = [];
  resultsCount: number;

  @Input()
  set results(data: any) {
    if (data) {
      this._results = data.results;
      this.resultsCount = data.count;
    }
  }

  constructor(
    private utilService: UtilService,
    private dataService: DataService,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    console.log(this._results);
  }

  removeDeleted(id) {
    this._results = this._results.filter(res => res._id !== id);
  }
}
