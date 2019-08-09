import { RawQuery } from './rawQuery';
import { Entry } from './entry';

export class SearchSub {
  constructor(name, type, freq, rawQuery, query, author?) {
    this.name = name;
    this.type = type;
    this.freq = freq;
    this.rawQuery = rawQuery;
    this.query = query;
    this.author = author;
  }
  _id: any;
  name: string;
  type: string;
  rawQuery: RawQuery;
  query: any;
  freq: string;
  isShared: boolean;
  author: string;
}
