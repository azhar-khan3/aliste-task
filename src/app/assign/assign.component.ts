import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent {

  constructor(private siteService: CommonService) {}

  changeInstallationDate() {
    const siteName = 'Site X';
    const newDate = new Date('2023-10-27'); 
    this.siteService.changeInstallationDate(siteName, newDate);
  }

  autoAssign() {
  this.siteService.autoAssignSites();  
  }
}
