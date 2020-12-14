import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
    @Input() satellites: Satellite[];
    
    constructor() { }

    ngOnInit(): void {
    }

    countTotal(satellites: Satellite[]): number {
      let countTotal: number = 0;
      for (let i: number = 0; i < satellites.length; i++) {
        countTotal = satellites.length;
        return countTotal
      }
    }

    countTypes(satellites: Satellite[], type: string): number {
      let counts: number = 0;
      for (let i: number = 0; i < satellites.length; i++) {
        if (satellites[i].type === type) {
        counts += 1;
        }  
    }
    return counts;
  }    
}
