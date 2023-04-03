import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehousing-equipment',
  templateUrl: './warehousing-equipment.component.html',
  styleUrls: ['./warehousing-equipment.component.scss']
})
export class WarehousingEquipmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openPdf() {
    window.open('../../../assets/images/offerImg/heavyDuty/Class-3-catalog.pdf', '_blank');
  }
}
