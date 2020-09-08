import { Component, OnInit } from '@angular/core';

interface HashTable<T> {
  [key: string]: T;
}

@Component({
  selector: 'app-morse',
  templateUrl: './morse.component.html',
  styleUrls: ['./morse.component.css']
})
export class MorseComponent implements OnInit {
  public letters = MorseComponent.getLetters();
  public code_map = MorseComponent.getMorse();
  delta: number = 0;
  input_message: string = "";

  constructor() { }

  ngOnInit() {
  }

  public getDelta() {
    return this.delta;
  }

  isLastChar(idx) {
    var msg_letters = (this.input_message.toUpperCase()).split('');
    var char = this.letters[idx];
    return char == msg_letters[msg_letters.length - 1];
  }

  public static getLetters() {
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    return alpha.split('');
  }

  public static getMorse() {
    var codes = `.-
    -...
    -.-.
    -..
    .
    ..-.
    --.
    ....
    ..
    .---
    -.-
    .-..
    --
    -.
    ---
    .--.
    --.-
    .-.
    ...
    -
    ..-
    ...-
    .--
    -..-
    -.--
    --..
    .----
    ..---
    ...--
    ....-
    .....
    -....
    --...
    ---..
    ----.
    -----
    `;
    return codes.split('\n');
  }

  getLineX(idx) {
    var new_idx: number = Number(idx);
    new_idx = new_idx * 10;
    return String(new_idx);
  }

  getIndex(idx) {
    var new_idx: number = (Number(idx) + Number(this.delta)) % this.letters.length;
    if (new_idx < 0) new_idx = new_idx + this.letters.length;
    return new_idx;
  }

  getCodedLetter(letter, start, end) {
    for (var j=0; j<start.length; j++) {
      if (letter == start[j]) {
        return end[j].concat(" ");
      }
    }
    return " / ";
  }

  decipher(msg) {
    var msg_letters = (msg.toUpperCase()).split('');
    var new_msg = '';
    for (var i=0; i<msg_letters.length; i++) {
      new_msg = new_msg.concat(this.getCodedLetter(msg_letters[i], this.code_map, this.letters));
    }
    return new_msg;
  }

  encipher(msg) {
    var msg_letters = (msg.toUpperCase()).split('');
    var new_msg = '';
    for (var i=0; i<msg_letters.length; i++) {
      new_msg = new_msg.concat(this.getCodedLetter(msg_letters[i], this.letters, this.code_map));
    }
    return new_msg;
  }

  getExplanationMsg(char) {
    var code = this.getCodedLetter(char, this.letters, this.code_map);
    return char + " ".repeat(10 - code.length) + code;
  }

}
