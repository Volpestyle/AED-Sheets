import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { first } from 'rxjs/operators';
import { Lookup } from 'src/app/models/lookup';
import { groupBy } from '../../utils';
@Injectable({
  providedIn: 'root',
})
export class LookupsService {
  constructor(private dataService: DataService) {}

  lookups: any = {};
  sortedLookups: any = {};

  sortedVals;

  getLookups() {
    let promise = new Promise((resolve, reject) => {
      this.dataService.getLookupValues().subscribe(
        vals => {
          this.sortedVals = groupBy(vals, val => val.lookup);

          //
          // This is where all lookups are defined.
          //
          const lookups = [
            new Lookup(
              'location',
              'Location',
              this.sortedVals.location ? this.sortedVals.location : [],
              'list',
            ),
            new Lookup(
              'show',
              'Show',
              this.sortedVals.show ? this.sortedVals.show : [],
              'list',
            ),
            new Lookup(
              'classification',
              'Classification',
              this.sortedVals.classification
                ? this.sortedVals.classification
                : [],
              'list',
            ),
            new Lookup(
              'heardOnAir',
              'What was heard on air',
              this.sortedVals.heardOnAir ? this.sortedVals.heardOnAir : [],
              'list',
            ),
            new Lookup(
              'actionTaken',
              'Action taken by drive tech',
              this.sortedVals.actionTaken ? this.sortedVals.actionTaken : [],
              'list',
            ),
            new Lookup(
              'duration',
              'Duration',
              this.sortedVals.duration ? this.sortedVals.duration : [],
              'range',
            ),
          ];
          this.lookups = lookups;
          this.sortedLookups = groupBy(lookups, l => l.type);
          console.log(this.sortedLookups);
          resolve();
        },
        err => {
          console.log(err);
          reject();
        },
      );
    });
    return promise;
  }
}
