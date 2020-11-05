import { Injectable } from '@angular/core';
import { PHONES } from '../components/phonelist/mockphonelist';
import { Phone } from '../interfaces/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }


  getPhones(): Phone[] {
    return PHONES;
  }

  getPhone(id): Phone {
    return PHONES.find(phone => phone.id === id);
  }
}
