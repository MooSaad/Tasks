import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Key } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  lists = []
  list = {}

  constructor(public afDB: AngularFireDatabase) {}

  getLists() {
    this.afDB.list('Tasks/').snapshotChanges().subscribe(lists => {
      lists.forEach(list => {
        this.lists.push({
          key: list.key,
          date: list.payload.exportVal().date,
          tasks: Object.values(list.payload.exportVal().tasks),
          title: list.payload.exportVal().title
          //checked: list.payload.exportVal().checked
        });
     });
    });
  }

  showList(key: string) {
    this.list = this.lists.find(l => l.key === key)
  }
}
