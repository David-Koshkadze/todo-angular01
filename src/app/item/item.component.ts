import { Component, Input } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: Item;
  @Input() index: number;

  constructor(private itemService: ItemService) {}

  onDeleteItem() {
    this.itemService.deleteItem(this.index);
  }

  markDone() {
    this.itemService.checkItem(this.index);
  }
}
