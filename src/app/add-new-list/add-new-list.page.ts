import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.page.html',
  styleUrls: ['./add-new-list.page.scss'],
})
export class AddNewListPage implements OnInit {
  newListObj = {}
  title: string = ''
  task: string = ''
  tasks: object[] = []

  constructor(public modalCtlr: ModalController, public afDB: AngularFireDatabase, public myServices: MyServicesService) {}

  addItem() {
    if (this.task !== '') {
      this.tasks.push({
        item: this.task,
        checked: false
      }
        )
      this.task = '';
    }
  }

  delete(item: object) {
    this.tasks.forEach((element, index) => {
      if (element === item) delete this.tasks[index]
    })
    //filtering 'empty' objects from the list 'tasks'
    this.tasks = this.tasks.filter(item => item);
  }

  ngOnInit() {}

  save() {
    if (this.title === '') this.title = 'No title';

    if (this.tasks.length > 0)
      this.newListObj = {
        userId: this.myServices.userId,
        title: this.title,
        tasks: this.tasks,
        date: new Date().toISOString()
      }
      this.pushToFirebase()
      this.dismis();
  }

  pushToFirebase() {
    this.afDB.list('Tasks/').push(this.newListObj);
  }

  async dismis() {
    await this.modalCtlr.dismiss(this.newListObj);
  }
}
