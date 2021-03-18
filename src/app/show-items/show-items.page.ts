import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.page.html',
  styleUrls: ['./show-items.page.scss'],
})
export class ShowItemsPage implements OnInit {
  text: string;
  image: string;
  url: string;
  subject: string;
  constructor(
    public myServices: MyServicesService,
    private socialSharing: SocialSharing,
    public afDB: AngularFireDatabase
  ) {
    this.text = this.myServices.list['title'] + '\n\n';
    this.myServices.list['tasks'].forEach((element) => {
      this.text += '- ' + element + '\n';
    });
    this.subject = myServices.list['title'];
  }

  shareGeneric(title: string, items: Array<string>, image?: any) {
    this.socialSharing.share(this.text, this.image);
  }

  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.text, this.image, this.url);
  }

  shareFacebook() {
    this.socialSharing.shareViaFacebook(this.text, this.image, this.url);
  }
  sendTwitter() {
    this.socialSharing.shareViaTwitter(this.text, this.image, this.url);
  }

  sendEmail() {
    // Check if sharing via email is supported
    this.socialSharing
      .canShareViaEmail()
      .then(() => {
        // Sharing via email is possible
      })
      .catch(() => {
        // Sharing via email is not possible
      });

    // Share via email
    this.socialSharing
      .shareViaEmail(this.text, this.subject, ['recipient@example.org'])
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }

/*   delete(key: string, task: Array<Object>) {
  let updatedTasks = this.myServices.list['tasks'].filter(function(tache) {
    return tache.item !== task['item'];
});

  if (updatedTasks.length > 0) {
    this.myServices.afDB.object('Tasks/' + key + '/tasks/').set(updatedTasks);
  } else {
    this.myServices.afDB.object('Tasks/' + key).remove();
  }
  } */

  checkIt(key: string) {
    let updatedTasks = this.myServices.list['tasks']
    this.myServices.afDB.object('Tasks/' + key + '/tasks/').set(updatedTasks);
  }

  remove(key: string) {
    this.myServices.afDB.object('Tasks/' + key).remove();
  }

  ngOnInit() {}
}
