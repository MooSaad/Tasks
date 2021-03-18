import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  date = new Date();
  currentDate = this.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  lists = []
  list: Object = {}
  userId: string
  constructor(public afDB: AngularFireDatabase) {}

  getLists() {
    this.afDB.list('Tasks/').snapshotChanges().subscribe(lists => {
      this.lists = []
      lists.forEach(list => {
        let taches = list.payload.exportVal()
        if (taches.userId === this.userId)
          this.lists.push({
            key: list.key,
            date: taches.date,
            tasks: taches.tasks && Object.values(taches.tasks),
            title: taches.title
          });
     });
    });
  }
}
