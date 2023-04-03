import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lpg-petrol',
  templateUrl: './lpg-petrol.component.html',
  styleUrls: ['./lpg-petrol.component.scss']
})
export class LpgPetrolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPdf() {
    window.open('../../../../assets/images/offerImg/newForklifts/20_25_30_35DL-7SA18.07Rev.3_web_2.pdf', '_blank');
  }

  openPdfElectric() {
    window.open('../../../../assets/images/offerImg/lpgPetrol/15_18_20LG-7M18.07Rev.6_web.pdf', '_blank');
  }

  openPdfA() {
    window.open('../../../../assets/images/offerImg/lpgPetrol/FL_ENG_35404550L-7A20.03Rev.10_web.pdf', '_blank');
  }

}
