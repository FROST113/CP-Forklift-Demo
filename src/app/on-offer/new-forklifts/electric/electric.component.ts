import { Component } from '@angular/core';

@Component({
  selector: 'app-electric',
  templateUrl: './electric.component.html',
  styleUrls: ['./electric.component.scss']
})
export class ElectricComponent {
  openPdf() {
    window.open('../../../assets/images/offerImg/newForklifts/20_25_30_35DL-7SA18.07Rev.3_web_2.pdf', '_blank');
  }

  openPdfElectric() {
    window.open('../../../assets/images/offerImg/newForklifts/25_30_35B-7A20.01Rev.2_eng_web.pdf', '_blank');
  }
}
