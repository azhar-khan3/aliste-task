import { Component } from '@angular/core';
import { Site } from '../models/site.model';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent {

  sites: Site[] = [];

  constructor(private siteService: CommonService) {}

  ngOnInit() {
    this.sites = this.siteService.getSites();
    console.log(this.sites);
  }

}
