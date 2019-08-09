import { Injectable } from '@angular/core';
import { Entry, Note } from 'src/app/models/entry';
import { HttpClient } from '@angular/common/http';
import { Lookup, LookupValue } from 'src/app/models/lookup';
import { filter, repeatWhen } from 'rxjs/operators';
import { RawQuery } from 'src/app/models/rawQuery';
import { UtilService } from '../util/util.service';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  hasInit: boolean = false;

  constructor(private http: HttpClient, private utilService: UtilService) {}

  searchEntries(query): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post<any>(`api/search`, {
          query,
        })
        .toPromise()
        .then(
          data => {
            console.log(data);
            this.hasInit = true;
            resolve(data);
          },
          err => {
            console.log(err);
            reject(err);
          },
        );
    });
  }

  //Serialize search data from RawQuery into query that elastic search can use.
  buildQuery(rawQuery: RawQuery): any {
    const {
      from,
      size,
      fromDate,
      toDate,
      techNames,
      location,
      show,
      classification,
      heardOnAir,
      actionTaken,
      duration,
      onAir,
      funder,
      serviceTicket,
      eTag,
      entry,
    } = rawQuery;

    //
    // Build query object
    //

    let mustArr = [];
    let filterArr = [];

    // Never pull entries flagged as deleted
    filterArr.push({ term: { isDeleted: false } });

    //Text
    if (entry) mustArr.push({ match: { entry } });
    if (eTag) mustArr.push({ match: { eTag } });

    //Keywords
    if (techNames.length) filterArr.push({ terms: { submittedBy: techNames } });
    if (location.length) filterArr.push({ terms: { location } });
    if (show.length) filterArr.push({ terms: { show } });
    if (classification.length) filterArr.push({ terms: { classification } });
    if (heardOnAir.length) filterArr.push({ terms: { heardOnAir } });
    if (actionTaken.length) filterArr.push({ terms: { actionTaken } });

    // Date
    if (fromDate && toDate) {
      filterArr.push({
        range: {
          date: {
            gte: fromDate,
            lte: toDate,
          },
        },
      });
    } else if (fromDate && !toDate) {
      filterArr.push({ term: { date: fromDate } });
    }

    // Duration
    if (duration.gte) {
      filterArr.push({
        range: {
          duration: {
            gte: duration.gte,
            lte: duration.lte,
          },
        },
      });
    }

    // Boolean
    if (onAir != undefined) filterArr.push({ term: { onAir } });
    if (funder != undefined) filterArr.push({ term: { funder } });
    if (serviceTicket != undefined) filterArr.push({ term: { serviceTicket } });

    const query = {
      from: from,
      size: size,
      query: {
        bool: {
          must: mustArr,
          filter: filterArr,
        },
      },
    };
    return query;
  }

  // Outputs all entries returned by query into .csv
  outputToCsv(query): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      query.from = undefined;
      query.size = 10000; // Max supported size
      this.searchEntries(query).then(({ results }) => {
        let output = [];
        const keys = Object.keys(results[0]);
        output.push(keys);
        results.forEach(result => {
          let row = [];
          keys.forEach(key => {
            if (key === 'date' || key === 'createdAt') {
              row.push(
                this.utilService.formatDate(result[key]).replace(',', ''),
              );
            } else if (key === 'notes') {
              row.push(
                result[key]
                  .map(
                    note =>
                      `${note.author} at ${this.utilService
                        .formatDate(note.createdAt)
                        .replace(',', '')}: ${note.content}`,
                  )
                  .join(' // '),
              );
            } else if (key === 'entry') {
              //'#' will end csv
              row.push(`\"${result[key].replace('#', '(hash sign)')}\"`);
            } else row.push(result[key]);
          });
          output.push(row);
        });
        let join = output.map(e => e.join(',')).join('\n');
        let csvContent = 'data:text/csv;charset=utf-8,' + join;
        let encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
        resolve();
      });
    });
  }
}
