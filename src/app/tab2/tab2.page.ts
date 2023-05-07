import { ShoppingItemsService } from './../services/shopping-items.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  element: string = '';

  constructor(private alertController: AlertController, private shoppingItemsService: ShoppingItemsService) {}

  addItem() {
    if(this.element.trim() != '') {
      if(!this.shoppingItemsService.exitsItem(this.element)) {
        this.shoppingItemsService.addItem(this.element);
        this.element = '';
        this.presentAlert("Elemento agregado", "Exito");
      } else {
        this.presentAlert("El item ya existe", "Error");
      }
    } else {
      this.presentAlert("No puedes ingresar un elemento vacio", "Error");
    }
  }

  async presentAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
