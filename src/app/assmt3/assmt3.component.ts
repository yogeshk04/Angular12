import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assmt3',
  templateUrl: './assmt3.component.html',
  styleUrls: ['./assmt3.component.css']
})
export class Assmt3Component implements OnInit {
  showScret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showScret = !this.showScret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
