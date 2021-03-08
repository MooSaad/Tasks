import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { AddNewListPage } from '../add-new-list/add-new-list.page';
import { ShowItemsPage } from '../show-items/show-items.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today: number = Date.now();
  lists = []
  user = null;
  userInfo: boolean = false
  constructor(public modalCtrl: ModalController, public afDB: AngularFireDatabase, public fireAuth: AngularFireAuth) {
    this.getTasks()
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

  async showItems() {
    const modal = this.modalCtrl.create({
      component: ShowItemsPage
    })
    return (await modal).present()
  }

  getTasks() {
    this.afDB.list('Tasks/').valueChanges().subscribe(lists => {
      lists.forEach(list => {
        //console.log(list)
        this.lists.push({
          date: list['date'],
          tasks: list['tasks'],
          title: list['title']
          //checked: list.payload.exportVal().checked
        });
     });
    });
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
