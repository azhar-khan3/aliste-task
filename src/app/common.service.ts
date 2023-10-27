import { Injectable } from '@angular/core';
import { Electrician } from './models/electrician.model';
import { Site } from './models/site.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  electricians: Electrician[] = [{
    name: 'Pranav',
    phoneNumber: '6161232524',
    zone: ['DELHI'],
    grievanceElectrician: true
 },
 {
    name: 'Sidharth',
    phoneNumber: '6161232524',
    zone: [ 'NOIDA', 'GHAZIABAD' ],
    grievanceElectrician: false
 }];

  getElectricians() {
    return this.electricians;
  }

  sites: Site[] = [{
    name: 'Site X',
    phone: '6163988877',
    owner_name: 'KRISHNA ROY',
    city: 'NOIDA',
    AssignedElectritian: [],
    InstallationDate: '2023-01-04T00:00:00.000Z',
    grievance: false,
  },
  {
    name: 'Site Y',
    phone: '6163988877',
    owner_name: 'Anuj Gupta',
    city: 'DELHI',
    AssignedElectritian: [],
    InstallationDate: '2023-10-18T00:00:00.000Z',
    grievance: true,
  },]; 

  getSites() {
    return this.sites;
  }

  changeInstallationDate(siteName: string, newDate: Date) {
    const site = this.sites.find((s) => s.name === siteName);
    if (site) {
      site.InstallationDate = newDate;
      console.log(`Installation date for ${siteName} changed to ${newDate}`);
    } else {
      console.error(`Site with name ${siteName} not found.`);
    }
  }

  autoAssignSites() {
    const electricians: Electrician[] = this.getElectricians();
    const sites: Site[] = this.getSites();

    let generalElectricians: Electrician[] = electricians.filter(
      (e) => !e.grievanceElectrician
    );
    let grievanceElectricians: Electrician[] = electricians.filter(
      (e) => e.grievanceElectrician
    );

    sites.forEach((site) => {
      if (site.grievance) {
        if (grievanceElectricians.length > 0) {
          const assignedElectrician = grievanceElectricians.shift();
          if (assignedElectrician) {
            site.AssignedElectritian.push({
              electricianName: assignedElectrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
                
              //Output 
              console.log("output full sites with assigned electrician :",site);
              console.log("assigned electrician :",site.AssignedElectritian);

            console.log(
              `Site ${site.name} in City ${site.city} is assigned to Electrician ${assignedElectrician.name} (Grievance).`
            );
          }
        } else {
          console.log(
            `No grievance electrician available for site ${site.name} in City ${site.city}.`
          );
        }
      } else {
        if (generalElectricians.length > 0) {
          const assignedElectrician = generalElectricians.shift();
          if (assignedElectrician) {
            site.AssignedElectritian.push({
              electricianName: assignedElectrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
            console.log(
              `Site ${site.name} in City ${site.city} is assigned to Electrician ${assignedElectrician.name} (General).`
            );
          }
        } else if (grievanceElectricians.length > 0) {
          const assignedElectrician = grievanceElectricians.shift();
          if (assignedElectrician) {
            site.AssignedElectritian.push({
              electricianName: assignedElectrician.name,
              electricianAssignDate: new Date().toISOString(),
            });
            console.log(
              `Site ${site.name} in City ${site.city} is assigned to Electrician ${assignedElectrician.name} (Grievance - due to unavailability of General electrician).`
            );
          }
        } else {
          console.log(
            `No electricians available for site ${site.name} in City ${site.city}.`
          );
        }
      }
    });
   this.getElectricians();
   this.getSites();

  }
}
