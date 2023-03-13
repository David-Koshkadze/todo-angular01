import { Component, OnInit } from '@angular/core';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(private itemsService: ItemService) {}

  ngOnInit(): void {}

  onNewItem(inputElement: HTMLInputElement) {
    this.itemsService.addItem(inputElement.value);
  }
}
