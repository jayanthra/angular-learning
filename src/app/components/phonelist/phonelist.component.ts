import { Component, OnInit } from '@angular/core';
import { Phone } from '../../interfaces/phone';
import { PhoneService } from 'src/app/services/phone.service';


@Component({
  selector: 'phone-list',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.scss']
})

export class PhonelistComponent implements OnInit {

  phone: Phone = {
    price: 0,
    name: '',
    os: '',
    imageUrl: '',
    id: '',
  };

  phoneList: Phone[];

  constructor(private phoneservice: PhoneService) { }

  ngOnInit(): void {
    this.getPhones();
  }


  getPhones(): void {
    this.phoneList = this.phoneservice.getPhones();
  }

  createLogo(os): string {
    return `../assets/${os}.png`;
  }

  save(): void {
    this.phone.id = this.getRandomString();
    const tempPhone: Phone = { ...this.phone };
    this.phoneList.unshift(tempPhone);
  }

  delete(phone: Phone): void {
    this.phoneList.forEach((item, index) => {
      if (item === phone) {
        this.phoneList.splice(index, 1);
      }
    });
  }

  getRandomString(): string {
    return Math.floor(Math.random() * Math.floor(30000)).toString();
  }

  hello(event: MouseEvent): void {
    alert('hello')
    event.stopPropagation()
  }
}
