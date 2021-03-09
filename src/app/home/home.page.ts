import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { AddNewListPage } from '../add-new-list/add-new-list.page';
import { ShowItemsPage } from '../show-items/show-items.page';
import { MyServicesService } from "../my-services.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date = new Date();
  currentDate = this.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  //lists = []
  user = null;
  userInfo: boolean = false
  constructor(public modalCtrl: ModalController, public fireAuth: AngularFireAuth, public myServices: MyServicesService) {
    //this.lists = myServices.lists
    myServices.getLists()
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
    });
  }

  async addList() {
    const modal = await this.modalCtrl.create({
      component: AddNewListPage
    })

    /* modal.onDidDismiss().then(newTask => {
      console.log(newTask.data);
      //this.list.push(newTask.data)
    }) */

    return await modal.present()
  }

  async showItems(key: string) {
    const modal = this.modalCtrl.create({
      component: ShowItemsPage
    })
    this.myServices.showList(key)
    return (await modal).present()
  }

  login() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  showUser() {
    this.userInfo = !this.userInfo
  }

  logout() {
    this.fireAuth.signOut();
    this.userInfo = !this.userInfo
  }
}
