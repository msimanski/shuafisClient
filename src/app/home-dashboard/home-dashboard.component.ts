import { Component, VERSION as angularVer, OnInit} from '@angular/core';
import { VERSION as materialVer } from '@angular/material/core';
import { GetStatisticsService } from '../service/get-statistics.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit 
{
  statisticsData: result;

  constructor(private getService: GetStatisticsService, private _snackBar: MatSnackBar) { }

  ngOnInit() 
  {
    this.stats();  
  }  
  
  /** Based on the screen size, switch from standard to one column per row */
  getVersions(): string {
    console.log(materialVer.full);
    return `Angular: ${angularVer.full}\nAngular Material: ${materialVer.full}`

  }

  stats() 
  {
    this.getService.getStats().subscribe(
      event => 
      {
      this.statisticsData = <result>event;
    },
    err => {
      this._snackBar.open("Failed to obtain statistics data. Contact your system administrator.", "OK", {
        duration: 10000,
      });
    });
  }
}

export interface result
{
  indexedprofiles: number;
  totalqueries: number;
  totalidentqueries: number;
}