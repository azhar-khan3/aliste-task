export interface Site {
    name: string;
    phone: string;
    owner_name: string;
    city: string;
    AssignedElectritian: { electricianName: string; electricianAssignDate: string }[];
    InstallationDate: any;
    grievance: boolean;
  
  }