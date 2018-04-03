import { Component } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular";
import { Storage } from '@ionic/storage';

import { NotificationsPage } from "../notifications/notifications";
import { SettingsPage } from "../settings/settings";
import { DataProvider } from "../../providers/data/data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  searchterm: string = '';
  instems: any;
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  constructor(
    private storage: Storage,
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public dataService: DataProvider) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Rio de Janeiro, Brazil"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });

    this.setFilteredItems()
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  setFilteredItems() {
    this.instems = this.dataService.filterItems(this.searchterm);
  }


}
