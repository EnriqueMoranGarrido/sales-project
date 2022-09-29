import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  //create an array of sales person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Morgan', 'Moran', 'mora@mail.com', 1),
    new SalesPerson('Iris', 'Moran', 'iris@mail.com', 2),
    new SalesPerson('Eve', 'Moran', 'eve@mail.com', 3),
    new SalesPerson('Matt', 'Moran', 'matt@mail.com', 4),
    new SalesPerson('Max', 'Moran', 'max@mail.com', 5),
  ];

  constructor() {}

  ngOnInit(): void {}
}
