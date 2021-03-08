import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.page.html',
  styleUrls: ['./show-items.page.scss'],
})
export class ShowItemsPage implements OnInit {

  listName
  task

  constructor() { }

  ngOnInit() {
  }

}
