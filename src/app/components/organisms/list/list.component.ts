import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() items!: any[];

  constructor() {}

  ngOnInit(): void {}

  share() {
    window.alert('The item has been shared!');
  }
}
