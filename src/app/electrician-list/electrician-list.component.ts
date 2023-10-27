import { Component } from '@angular/core';
import { Electrician } from '../models/electrician.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-electrician-list',
  templateUrl: './electrician-list.component.html',
  styleUrls: ['./electrician-list.component.css']
})
export class ElectricianListComponent {

  electricians: Electrician[] = [];

  constructor(private electricianService: CommonService) {}

  ngOnInit() {
    this.electricians = this.electricianService.getElectricians();
  }
}
