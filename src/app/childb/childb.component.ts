import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childb',
  templateUrl: './childb.component.html',
  styleUrls: ['./childb.component.css']
})
export class ChildbComponent implements OnInit {

  @Output() shareData = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
