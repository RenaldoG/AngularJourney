import { Component, OnInit } from '@angular/core';

import { InventoryItem } from '../../../../../Models/Inventory/InventoryItem';

import { InventoryData } from '../../../../../TestData/InventoryData';
import { ThrowStmt } from '@angular/compiler';

@Component({  selector: 'app-inventory-check-list',  templateUrl: './inventory-check-list.component.html',
  styleUrls: ['./inventory-check-list.component.css']
})
export class InventoryCheckListComponent implements OnInit {
  displayedColumns: string[] = ['Price', 'Name', 'Amount', 'IsStocked']
  columnsToDisplay: string[] = this.displayedColumns.slice();
  inventoryList: InventoryItem[] = InventoryData;

  constructor() { }

  ngOnInit() {
  }

  /*addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }

    shuffle() {
      let currentIndex = this.columnsToDisplay.length;
      while ()
      let temp = this.columnsToDisplay[currentIndex];
    }
  }*/

}
