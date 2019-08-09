import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private toastr: ToastrService) {}

  //
  // FORMATTING
  //

  formatDate(d, options?) {
    if (!options) {
      options = {
        hour12: false,
        timeZoneName: 'short',
      };
    }
    const date = new Date(d);
    return `${date.toLocaleString('en-us', options)}`;
  }

  formatSeconds(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }

  objToSeconds(obj) {
    return obj.hour * 60 * 60 + obj.minute * 60 + obj.second;
  }

  hmsToSeconds(hms) {
    let a = hms.split(':').map(n => parseInt(n));
    if (a.length === 1) {
      return;
    } else if (a.length === 2) {
      return a[0] * 60 + a[1];
    } else if (a.length === 3) {
      return a[0] * 60 * 60 + a[1] * 60 + a[2];
    }
  }

  secondsToObj(secs) {
    let hour = Math.floor(secs / 3600);
    let minute = Math.floor(secs / 60) % 60;
    let second = secs % 60;
    return { hour, minute, second };
  }

  objToHms(obj) {
    let dispArr = [];
    let hDisplay = obj.hour > 0 ? obj.hour + (obj.hour == 1 ? 'h' : 'hrs') : '';
    if (hDisplay) dispArr.push(hDisplay);
    let mDisplay =
      obj.minute > 0 ? obj.minute + (obj.minute == 1 ? 'm' : 'mins') : '';
    if (mDisplay) dispArr.push(mDisplay);
    let sDisplay = obj.second > 0 ? obj.second + 's' : '';
    if (sDisplay) dispArr.push(sDisplay);
    let resStr = dispArr.length > 1 ? dispArr.join(', ') : dispArr.join('');
    return resStr === '' ? 0 : resStr;
  }

  formatRawQueryVal(key, val) {
    return {
      key,
      val:
        (val !== null && val.length) || typeof val === 'boolean'
          ? val
          : key === 'duration'
          ? `${val.gte}s - ${val.lte}s`
          : 'Any',
    };
  }

  //
  // TOAST MESSAGES
  //

  msgOptions = {
    positionClass: 'toast-top-center',
    closeButton: true,
    timeOut: 3000,
  };

  //
  // MISC
  //
  titleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  //https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
  csvToArray(text) {
    let p = '',
      row = [''],
      ret = [row],
      i = 0,
      r = 0,
      s = !0,
      l;
    for (l of text) {
      if ('"' === l) {
        if (s && l === p) row[i] += l;
        s = !s;
      } else if (',' === l && s) l = row[++i] = '';
      else if ('\n' === l && s) {
        if ('\r' === p) row[i] = row[i].slice(0, -1);
        row = ret[++r] = [(l = '')];
        i = 0;
      } else row[i] += l;
      p = l;
    }
    console.log(ret);
    return ret;
  }
}
