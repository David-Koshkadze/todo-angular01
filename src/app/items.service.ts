import { Injectable } from '@angular/core';

import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
  items: Item[] = [
    {
      id: 1,
      description: 'Hello World 12',
      done: false,
    },
    {
      id: 2,
      description: 'Angular is cool',
      done: true,
    },
    {
      id: 3,
      description: 'Clean the house',
      done: true,
    },
  ];

  addItem(newItemText: string) {
    if (!newItemText.trim()) return;

    const newItem: Item = {
      id: this.items.length + 1,
      description: newItemText,
      done: false,
    };

    this.items.unshift(newItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    console.log(this.items);
  }

  checkItem(index: number) {
    this.items[index].done = !this.items[index].done;
    console.log(this.items[index].done);
  }
}
