import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.css']
})
export class EnigmaComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';
  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

}
