import { Component } from '@angular/core';
import { Data } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  weight: number;
}

export interface RiverMeasure {
  id: number;
  measurementValue: number;
  measureDate: Date;
  }

const ELEMENT_DATA: RiverMeasure[] = [
  {id: 1, measurementValue: 3, measureDate: new Date(2023,0,21)},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, sybol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent {
  displayedColumns: string[] = ['ID', 'Value', 'Date'];
  dataSource = ELEMENT_DATA;

}
