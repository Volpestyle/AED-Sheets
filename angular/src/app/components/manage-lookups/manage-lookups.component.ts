import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Lookup } from '../../models/lookup';
import { first } from 'rxjs/operators';
import { LookupsService } from 'src/app/services/lookups/lookups.service';

@Component({
  selector: 'app-manage-lookups',
  templateUrl: './manage-lookups.component.html',
  styleUrls: ['./manage-lookups.component.scss'],
  providers: [LookupsService],
})
export class ManageLookupsComponent implements OnInit {
  constructor(private lookupsService: LookupsService) {}

  ngOnInit() {
    this.lookupsService.getLookups();
  }
}
