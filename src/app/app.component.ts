import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private itemsService: ItemService) {}

  items: Item[];

  name = 'David';

  ngOnInit() {
    this.items = this.itemsService.items;
  }
}
