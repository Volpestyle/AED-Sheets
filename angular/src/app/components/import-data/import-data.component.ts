import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UtilService } from 'src/app/services/util/util.service';
import { promise } from 'protractor';
import { Entry } from 'src/app/models/entry';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss'],
})
export class ImportDataComponent implements OnInit {
  file: File;
  csvContent: any;
  isImporting: boolean;

  constructor(
    private toastr: ToastrService,
    private utilService: UtilService,
    private dataService: DataService,
  ) {}

  ngOnInit() {}

  @ViewChild('labelImport', { static: false }) labelImport!: ElementRef;

  onFileChange(files: FileList) {
    if (!(files.item(0).type === 'text/csv')) {
      this.toastr.error(
        'File must be .csv',
        'Wrong file type',
        this.utilService.msgOptions,
      );
      return;
    }
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.file = files.item(0);
    console.log(this.file);
  }

  import() {
    this.isImporting = true;
    let reader = new FileReader();
    reader.readAsText(this.file, 'UTF-8');
    reader.onload = async e => {
      let newEntries = [];
      let lines: string[][] = this.utilService.csvToArray(reader.result);
      lines.forEach(line => {
        // Lines are assumed to be in this order:
        // Date	- Time - Tech Name - On Air - Show - Entry - Location - Classification - Funder - Duration - What was heard on air - Action Taken
        let newEntry = new Entry(
          line[2],
          this.getDateObj(line[0], line[1]),
          line[6],
          line[4],
          line[7],
          line[10],
          line[11],
          line[3] === 'Yes' ? true : false,
          line[8] === 'Yes' ? true : false,
          this.utilService.hmsToSeconds(line[9]),
          '',
          line[5],
          false,
        );
        newEntries.push(newEntry);
      });
      let savedAll = newEntries.map(entry => {
        return new Promise((resolve, reject) => {
          this.dataService
            .createEntry(entry, { isLive: false })
            .subscribe(saved => {
              resolve(saved);
            });
        });
      });
      Promise.all(savedAll).then(() => {
        this.isImporting = false;
        this.toastr.success(
          '',
          'All D-sheets have been imported.',
          this.utilService.msgOptions,
        );
      });
    };
  }

  getDateObj(date, time) {
    date.replace('/', '-');
    let d = new Date(date);
    let a = time.split(':');
    if (a.length)
      d.setHours(parseInt(a[0]), parseInt(a[1]), a[2] ? parseInt(a[2]) : 0);
    return d;
  }
}
