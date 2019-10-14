import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//Models
import { InventoryItem } from '../../../../../Models/Inventory/InventoryItem';
//MockData
import { InventoryData } from '../../../../../TestData/InventoryData';

@Component({
  selector: 'app-complete-inventory-order',
  templateUrl: './complete-inventory-order.component.html',
  styleUrls: ['./complete-inventory-order.component.css']
})
export class CompleteInventoryOrderComponent implements OnInit {
  secondFormGroup: FormGroup;
  displayedColumns: string[] = ['Price', 'Name', 'Amount', 'IsStocked'];
  dataSource = InventoryData;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
