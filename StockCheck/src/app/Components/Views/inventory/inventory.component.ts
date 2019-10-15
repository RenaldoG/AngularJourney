import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../Services/Inventory/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  test1:string;
  test2:string;
  constructor(private service: InventoryService) { }

  ngOnInit() {
  }

  showData() {
    this.service.getInventory().subscribe((data: string) => this.test1 = data)
  }

}
