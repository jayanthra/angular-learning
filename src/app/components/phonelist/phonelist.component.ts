import { Component, OnInit } from '@angular/core';
import { Phone } from './phone'


@Component({
  selector: 'phone-list',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})
export class PhonelistComponent implements OnInit {

  counter = 0
  phone: Phone = {
    price: 100,
    name: 'iPhone',
    os: 'ios',
    imageUrl: 'https://picsum.photos/300/300'
  }
  constructor() { }
  ngOnInit(): void {
  }
  increment() {
    this.counter++
  }
}
