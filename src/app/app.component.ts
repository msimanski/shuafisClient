import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  animations: [
        trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0}),
          animate('250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('250ms', style({transform: 'translateY(-20%)', opacity: 0}))
        ])
      ]
    )]
})
export class AppComponent implements OnInit {
  
  constructor(private breakObserver: BreakpointObserver){}
  get isMobile() {
    if (this.breakObserver.isMatched('(max-width: 599px)')) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    
  }
}
