import { Component, VERSION as angularVer} from '@angular/core';
import { VERSION as materialVer } from '@angular/material';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  getVersions(): string {
    console.log(materialVer.full);
    return `Angular: ${angularVer.full}\nAngular Material: ${materialVer.full}`
  }
}
