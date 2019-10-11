import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Inventory {
  name: string;
  position: number;
  amount: number;
  stocked: boolean;
}

const ELEMENT_DATA: Inventory[] = [
  {position: 1, name: 'Beer',         amount: 4, stocked: true},
  {position: 2, name: 'Milk',         amount: 5, stocked: true},
  {position: 3, name: 'Noodles',      amount: 4, stocked: true},
  {position: 4, name: 'Pringles',     amount: 6, stocked: false},
  {position: 5, name: 'Oros',         amount: 5, stocked: true},
  {position: 6, name: 'Steak',        amount: 7, stocked: true},
  {position: 7, name: 'Toilet Paper', amount: 6, stocked: true},
  {position: 8, name: 'Tooth Paste',  amount: 5, stocked: false},
  {position: 9, name: 'Braai',        amount: 6, stocked: true},
  {position: 10, name: 'Pie',         amount: 7, stocked: true},
];

@Component({  selector: 'app-inventory-check-list',  templateUrl: './inventory-check-list.component.html',
  styleUrls: ['./inventory-check-list.component.css']
})
export class InventoryCheckListComponent implements OnInit {
  secondFormGroup: FormGroup;
  displayedColumns: string[] = ['position', 'name', 'amount', 'stocked'];
  dataSource = ELEMENT_DATA;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
