import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ModalController } from '@ionic/angular';
import { AddNewListPage } from '../add-new-list/add-new-list.page';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = null;
  constructor(
    public modalCtrl: ModalController,
    public myServices: MyServicesService,
    public fireAuth: AngularFireAuth,
  ) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
      this.myServices.userId = user ? user.uid : '';
    });
  }

  login() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  userInfo: boolean = false;
  showUser() {
    this.userInfo = !this.userInfo;
  }

  logout() {
    this.fireAuth.signOut();
    this.userInfo = !this.userInfo;
  }

  async addList() {
    const modal = await this.modalCtrl.create({
      component: AddNewListPage,
    });
    return await modal.present();
  }

  getList(key: string) {
    this.myServices.list = this.myServices.lists.find((l) => l.key === key);
  }
}
