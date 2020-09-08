import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {
  public letters = CaesarComponent.getLetters();
  delta: number = 0;
  input_message: string = '';
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
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alpha.split('');
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

  encipher(msg) {
    var msg_letters = (msg.toUpperCase()).split('');
    var new_msg = '';
    var apply_delta = this.letters.length + (this.delta % this.letters.length)
    for (var i=0; i<msg_letters.length; i++) {
      for (var j=0; j<this.letters.length; j++) {
        if (msg_letters[i] == this.letters[j]) {
          var new_index = (j + apply_delta) % this.letters.length;
          new_msg = new_msg.concat(this.letters[new_index]);
        }
        else if (msg_letters[i] == " ") new_msg = new_msg.concat(" ");
      }
    }
    return new_msg;
  }
}


/*

def do_rotor(letter, rotor):
    print(rotor[letters.index(letter)])
    return rotor[letters.index(letter)]

letters =   'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
rotor1 =    'JGDQOXUSCAMIFRVTPNEWKBLZYH'
rotor2 =    'NTZPSFBOKMWRCJDIVLAEYUXHGQ'
rotor3 =    'JVIUBHTCDYAKEQZPOSGXNRMWFL'
reflector = 'QYHOGNECVPUZTFDJAXWMKISRBL'

msg = 'AA'

offset = 0
rotors = [rotor1, rotor2, rotor3]
crypto_msg = ''
for char in msg:
    print("--------------")
    print(char)
    for r in rotors:
        new = do_rotor(char, r)
    new = do_rotor(char, reflector)
    char = new
    for i in range(len(rotors)-1, -1, -1):
        new = do_rotor(char, rotors[i])

    print(new)
    crypto_msg += new
    rotor1 = rotor1[-1] + rotor1[:-1]
    rotors[0] = rotor1
    offset += 1

print("Encryption: {}".format(crypto_msg))

*/
