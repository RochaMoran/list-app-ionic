import { AlertController } from '@ionic/angular';
import { ShoppingItemsService } from './../services/shopping-items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: string[] = [];
  constructor(public shoppingItemsService: ShoppingItemsService, private alertController: AlertController) {}

  ngOnInit(): void {
    this.items = this.shoppingItemsService.items;
  }

  removeItem(item: string) {
    this.confirm(item);
  }

  confirm(item: string) {
    this.alertController.create({
      header: 'Confirmar',
      message: 'Estas seguro que deseas eliminar el producto?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.alertController.dismiss();
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.shoppingItemsService.removeItem(item);
          }
        }
      ]
    }).then(alert => alert.present());
  }

  renderItems(event: any) {
    const item = this.shoppingItemsService.items.splice(event.detail.from, 1)[0];
    this.shoppingItemsService.items.splice(event.detail.to, 0, item);
    event.detail.complete();
  }

  removeAll() {
    this.alertController.create({
      header: 'Confirmar',
      message: 'Estas seguro que deseas eliminar todos los productos?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.alertController.dismiss();
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.shoppingItemsService.clearItems();
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
