import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/services/phone.service';
import { Phone } from '../phonelist/phone';

@Component({
  selector: 'app-phonedetails',
  templateUrl: './phonedetails.component.html',
  styleUrls: ['./phonedetails.component.scss']
})
export class PhonedetailsComponent implements OnInit {

  phone: Phone;

  constructor(private phoneService: PhoneService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPhone();
  }

  loadPhone(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('phoneid');
    this.phone = this.phoneService.getPhone(id);
  }

}
