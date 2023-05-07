import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {
  private _items: string[];
  private _isEmpty: boolean;
 
  public get items(): string[] {
    return this._items;
  }
  public set items(value: string[]) {
    this._items = value;
  }
 
  public get isEmpty(): boolean {
    return this._isEmpty;
  }
  public set isEmpty(value: boolean) {
    this._isEmpty = value;
  }
  
  constructor() { 
    this._items = [];
    this._isEmpty = true;
  }

  addItem(item: string) {
    this._items.push(item);
    this._isEmpty = false;
  }

  removeItem(item: string) {
    let index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }
    if (this._items.length == 0) {
      this._isEmpty = true;
    }
  }

  clearItems() {
    this._items = [];
    this._isEmpty = true;
  }

  exitsItem(item: string): boolean {
    let index = this._items.find(element => element.toLowerCase().trim() === item.toLowerCase().trim());
    
    return index ? true : false;
  }
}
