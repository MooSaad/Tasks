import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.page.html',
  styleUrls: ['./show-items.page.scss'],
})
export class ShowItemsPage implements OnInit {

  constructor(public myServices: MyServicesService) { }

  ngOnInit() {
  }

}
